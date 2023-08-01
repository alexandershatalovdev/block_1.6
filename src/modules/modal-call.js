const buttonOpenCall = document.querySelector('.menu-sidebar__button--modal-call');
const buttonCloseCall = document.querySelector('.modal-close-btn--call');
const modalCallOverlay = document.querySelector('.modal-call-overlay');

function openModal() {
  modalCallOverlay.classList.add('modal-call-overlay--open');
  document.addEventListener('click', closeModalOnOutsideClick);
}

function closeModal() {
  modalCallOverlay.classList.remove('modal-call-overlay--open');
  document.removeEventListener('click', closeModalOnOutsideClick);
}

function closeModalOnOutsideClick(event) {
  if (window.innerWidth >= 768 && window.innerWidth < 1366) {
    if (!modalCallOverlay.contains(event.target) && !buttonOpenCall.contains(event.target)) {
      closeModal();
    }
  }
}

buttonOpenCall.addEventListener('click', openModal);
buttonCloseCall.addEventListener('click', closeModal);

window.addEventListener('resize', () => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 320 && windowWidth < 1366) {
    closeModal();
  }
});

// Ensure modal is closed by default on page load
document.addEventListener('DOMContentLoaded', () => {
  closeModal();
});
