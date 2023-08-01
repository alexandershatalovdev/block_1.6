const buttonOpen = document.querySelector('.header__button--burger');
const buttonClose = document.querySelector('.menu-sidebar__button--close');
const menuSidebar = document.querySelector('.menu-sidebar');

function openMenuSidebar() {
  menuSidebar.classList.add('menu-sidebar--open');
  document.addEventListener('click', closeMenuSidebarOnOutsideClick);
}

function closeMenuSidebar() {
  menuSidebar.classList.remove('menu-sidebar--open');
  document.removeEventListener('click', closeMenuSidebarOnOutsideClick);
}

function closeMenuSidebarOnOutsideClick(event) {
  if (window.innerWidth >= 768 && window.innerWidth < 1366) {
    if (!menuSidebar.contains(event.target) && !buttonOpen.contains(event.target)) {
      closeMenuSidebar();
    }
  }
}

buttonOpen.addEventListener('click', openMenuSidebar);
buttonClose.addEventListener('click', closeMenuSidebar);

window.addEventListener('resize', () => {
  if (window.innerWidth >= 320 && window.innerWidth < 1366) {
    closeMenuSidebar();
  }
});

// Ensure sidebar is hidden by default on page load
document.addEventListener('DOMContentLoaded', () => {
  menuSidebar.classList.add('menu-sidebar--hidden');
});

// Show the sidebar after the page has loaded
window.addEventListener('load', () => {
  menuSidebar.classList.remove('menu-sidebar--hidden');
});
