const readMore = document.querySelector('#read-more-p')
const svg = document.querySelector('#svg-p')
const toRead = document.querySelector('#to-read')
const readMoreText = document.querySelector('#p-show-hide')

readMore.addEventListener('click', () => {
  if (toRead.classList.contains('hide')) {
    toRead.classList.toggle('hide')
    svg.style.transform = 'rotateX(180deg)'
    readMoreText.innerText = 'Скрыть'
    return
  }
  toRead.classList.toggle('hide')
  readMoreText.innerText = 'Читать далее'
  svg.style.transform = 'rotateX(0deg)'
})
