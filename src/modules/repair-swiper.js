// import Swiper JS
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Function to initialize Repair Swiper on small screens
export function initRepairSwiper() {
  const windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    const repairSwiperContainer = document.querySelector('.swiper-repair');

    if (repairSwiperContainer) {
      new Swiper(repairSwiperContainer, {
        modules: [Pagination],
        // slidesPerView: 'auto',
        spaceBefore: 16,
        spaceBetween: 16,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination-repair',
          clickable: true,
        },
      });
    }
  }
}

// Function to destroy the second Swiper slider (repair swiper)
export function destroyRepairSwiper() {
  // const repairSwiperContainer = document.querySelector('.repair-swiper');
  // const repairSwiperInstance = repairSwiperContainer ? repairSwiperContainer.swiper : null;

  const repairSwiperInstance = document.querySelector('.swiper-repair').swiper;

  if (repairSwiperInstance) {
    repairSwiperInstance.destroy();
  }
}
