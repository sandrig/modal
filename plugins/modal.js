function _createModal(options) {
  const DEFAULT_WIDTH = '600px'
  const modal = document.createElement('div')
  modal.classList.add('cmodal')
  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
      <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
        <div class="modal-header">
          <span class="modal-title">${options.title || 'Окно'}</span>
          ${options.closable ? `<span class="modal-close">&times;</span>` : ''}
        </div>
        <div class="modal-body">
          ${options.content || ''}
        </div>
        <div class="modal-footer">
          <button>Ok</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  `)
  document.body.appendChild(modal)
  return modal
}

$.modal = function (options) {
  const ANIMATION_SPEED = 200
  const $modal = _createModal(options)
  let isClose = false

  return {
    open() {
      !isClose && $modal.classList.add('open')
    },
    close() {
      isClose = true
      $modal.classList.remove('open')
      $modal.classList.add('hide')
      setTimeout(() => {
        $modal.classList.remove('hide')
        isClose = false
      }, ANIMATION_SPEED)
    },
    destroy() {}
  }
}
