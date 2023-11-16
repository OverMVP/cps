let init = false
let swiper
function swiperContainer() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true
      swiper = new Swiper('.tech-swiper', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      })
    }
  } else if (init) {
    swiper.destroy()
    init = false
  }
}
swiperContainer()
window.addEventListener('resize', swiperContainer)
