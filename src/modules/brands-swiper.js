// import Swiper JS
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Function to initialize Brands Swiper on small screens
export function initBrandsSwiper() {
  const windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    const swiperContainer = document.querySelector('.swiper');

    if (swiperContainer) {
      new Swiper(swiperContainer, {
        modules: [Pagination],
        // slidesPerView: 'auto',
        spaceBefore: 16,
        spaceBetween: 16,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  }
}

// Function to destroy the first Swiper slider (brands swiper)
export function destroyBrandsSwiper() {
  const swiperInstance = document.querySelector('.swiper').swiper;

  if (swiperInstance) {
    swiperInstance.destroy();
  }
}
