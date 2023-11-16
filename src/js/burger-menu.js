const burgerBtn = document.querySelector('.burger')
const closeBtn = document.querySelector('.btn-close')
const content = document.querySelector('.body')
const sideMenu = document.querySelector('.side-menu')
const blurBG = document.querySelector('.blur-bg')

window.addEventListener('click', (e) => {
  e.stopPropagation()

  const { target } = e
  const events = [burgerBtn, closeBtn]

  if (events.includes(target)) {
    sideMenu.classList.add('active')
    if (window.innerWidth > 320 && window.innerWidth < 1127) {
      blurBG.classList.add('blur-active')
    }
  }

  if ((target === blurBG && target !== events[0]) || target === events[1]) {
    sideMenu.classList.remove('active')
    blurBG.classList.remove('blur-active')
  }
})
