const devicesBtn = document.querySelector('#devices')

const devicesBlock = document.querySelector('#repair-block')

devicesBtn.addEventListener('click', (e) => {
  e.preventDefault()
  devicesBlock.scrollIntoView({
    behavior: 'smooth',
    block: 'end'
  })
})
