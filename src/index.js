// Import SCSS files (stylesheets)
import './main.scss';

// Import JavaScript modules
import { toggleReadMore, toggleShowMore, toggleShowMoreRepair } from './modules/toggleButton';

// Import swiper-init.js
import { initBrandsSwiper, destroyBrandsSwiper } from './modules/brands-swiper';
import { initRepairSwiper, destroyRepairSwiper } from './modules/repair-swiper';
import { initPricesSwiper, destroyPricesSwiper } from './modules/prices-swiper';

// Import the menu-sidebar.js file
import './modules/menu-sidebar';

// Import the modal-msg.js file
import './modules/modal-msg';

// Import the modal-call.js file
import './modules/modal-call';

function handleSwiper() {
  const windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    initBrandsSwiper();
    initRepairSwiper();
    initPricesSwiper();
  } else {
    destroyBrandsSwiper();
    destroyRepairSwiper();
    destroyPricesSwiper();
  }
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const buttonReadMore = document.getElementById('readMore');
  const buttonShowMore = document.getElementById('showMore');
  const buttonShowMoreRepair = document.getElementById('showMoreRepair');

  buttonReadMore.addEventListener('click', () => toggleReadMore());
  buttonShowMore.addEventListener('click', () => toggleShowMore());
  buttonShowMoreRepair.addEventListener('click', () => toggleShowMoreRepair());

  handleSwiper();
});

// Initialize Swiper when the DOM content is loaded
// document.addEventListener('DOMContentLoaded', handleSwiper);

// Reinitialize Swiper when the window is resized
window.addEventListener('resize', handleSwiper);
