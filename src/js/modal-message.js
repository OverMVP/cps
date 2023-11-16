const messageBtn = document.querySelector('.chat')
const menuBtnMessage = document.querySelector('.btn-message')
const modalMessage = document.querySelector('.modal-message')
const blurBG = document.querySelector('.blur-bg')
const callBtn = document.querySelector('.call')
const menuBtnCall = document.querySelector('.btn-call')
const modalCall = document.querySelector('.modal-call')
const closeModal = document.querySelector('#close-modal-message')
const asideMenu = document.querySelector('#aside-men')

window.addEventListener('click', (e) => {
  e.stopPropagation()
  const { target } = e

  if (target === messageBtn || target === menuBtnMessage) {
    modalCall.classList.remove('modal-active')
    modalMessage.classList.add('modal-active')
    blurBG.classList.add('blur-active')
    return
  }
  if (target === blurBG || target === closeModal) {
    if (!asideMenu.classList.contains('active')) {
      modalMessage.classList.remove('modal-active')
      blurBG.classList.remove('blur-active')
    } else {
      modalMessage.classList.remove('modal-active')
    }
  }
})
