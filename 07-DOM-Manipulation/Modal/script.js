'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const openModal = document.querySelectorAll('.show-modal');
let isOpen = false;

const toggleModal = () => {
  if (isOpen) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  } else {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
  isOpen = !isOpen;
};

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', () => {
    toggleModal();
  });
}

closeModal.addEventListener('click', () => {
  toggleModal();
});

overlay.addEventListener('click', () => {
  toggleModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && isOpen) {
    toggleModal();
  }
});
