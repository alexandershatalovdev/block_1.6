// import Swiper JS
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Function to initialize Repair Swiper on small screens
export function initPricesSwiper() {
  const windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    const repairSwiperContainer = document.querySelector('.swiper-prices');

    if (repairSwiperContainer) {
      new Swiper(repairSwiperContainer, {
        modules: [Pagination],
        // slidesPerView: 'auto',
        spaceBefore: 16,
        spaceBetween: 16,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination-prices',
          clickable: true,
        },
      });
    }
  }
}

// Function to destroy the second Swiper slider (repair swiper)
export function destroyPricesSwiper() {
  // const repairSwiperContainer = document.querySelector('.repair-swiper');
  // const repairSwiperInstance = repairSwiperContainer ? repairSwiperContainer.swiper : null;

  const pricesSwiperInstance = document.querySelector('.swiper-prices').swiper;

  if (pricesSwiperInstance) {
    pricesSwiperInstance.destroy();
  }
}
