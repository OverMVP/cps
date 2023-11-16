const readmore = document.querySelector('#btn')
const servicesList = document.querySelector('.services-list')
const showHide = document.querySelector('#show-hide')
const svg = document.querySelector('#svg-sh')

const repairBtn = document.querySelector('#btn-tech')
const techList = document.querySelector('#tech-list')
const repairBtnText = document.querySelector('#show-hide-repair')
const svgTech = document.querySelector('#svg-tech')

readmore.addEventListener('click', (e) => {
  if (servicesList.style.height === 'auto') {
    servicesList.style.height = '165px'
    showHide.innerText = 'Показать все'
    svg.style.transform = 'rotateX(0deg)'
    return
  }

  servicesList.style.height = 'auto'
  showHide.innerText = 'Скрыть'
  svg.style.transform = 'rotate(180deg)'
})

repairBtn.addEventListener('click', () => {
  if (techList.style.height === 'auto') {
    techList.style.height = '165px'
    repairBtnText.innerText = 'Показать все'
    svgTech.style.transform = 'rotateX(0deg)'
    return
  }
  techList.style.height = 'auto'
  repairBtnText.innerText = 'Скрыть'
  svgTech.style.transform = 'rotateX(180deg)'
})
