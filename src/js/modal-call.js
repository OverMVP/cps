const callBtn = document.querySelector('.call')
const menuBtnCall = document.querySelector('.btn-call')
const modalCall = document.querySelector('.modal-call')
const blurBG = document.querySelector('.blur-bg')
const messageBtn = document.querySelector('.chat')
const menuBtnMessage = document.querySelector('.btn-message')
const modalMessage = document.querySelector('.modal-message')
const closeModal = document.querySelector('#close-modal-call')
const asideMenu = document.querySelector('#aside-men')

window.addEventListener('click', (e) => {
  e.stopPropagation()
  const { target } = e

  if (target === callBtn || target === menuBtnCall) {
    modalMessage.classList.remove('modal-active')
    modalCall.classList.add('modal-active')
    blurBG.classList.add('blur-active')
    return
  }

  if (target === blurBG || target === closeModal) {
    if (!asideMenu.classList.contains('active')) {
      modalCall.classList.remove('modal-active')
      blurBG.classList.remove('blur-active')
    } else {
      modalCall.classList.remove('modal-active')
    }
  }
})
