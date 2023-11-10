import { navTab, navAccordion, navScroll,animationScroll } from "./modules/navegation.js"
import initModal from './modules/modal.js'
import initMenuDropdown from './modules/menuDropdown.js'
import initMenuMobile from './modules/menuMobile.js'
import iniFetchBitcoin from './modules/fetchBitcoin.js'

navTab()
navAccordion()
navScroll()
animationScroll()
initModal()
initMenuDropdown()
initMenuMobile()
iniFetchBitcoin()

const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });


const swiper2 = new Swiper('.mySwiper2', {
    loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });