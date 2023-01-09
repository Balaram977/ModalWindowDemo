'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');
//console.log(btnsOpenModel);
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button clicked!');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
let closeModal = function () {
  //console.log('clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//keyboard events are global events

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
