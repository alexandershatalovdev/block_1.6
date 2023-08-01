const buttonOpen = document.querySelector('.menu-sidebar__button--modal-msg');
const buttonClose = document.querySelector('.modal-close-btn--msg');
const modalMsgOverlay = document.querySelector('.modal-msg-overlay');

function openModal() {
  modalMsgOverlay.classList.add('modal-msg-overlay--open');
  document.addEventListener('click', closeModalOnOutsideClick);
}

function closeModal() {
  modalMsgOverlay.classList.remove('modal-msg-overlay--open');
  document.removeEventListener('click', closeModalOnOutsideClick);
}

function closeModalOnOutsideClick(event) {
  if (window.innerWidth >= 768 && window.innerWidth < 1366) {
    if (!modalMsgOverlay.contains(event.target) && !buttonOpen.contains(event.target)) {
      closeModal();
    }
  }
}

buttonOpen.addEventListener('click', openModal);
buttonClose.addEventListener('click', closeModal);

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
