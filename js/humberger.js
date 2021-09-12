'use strict';

const btn = document.getElementById('js-btn');
const header = document.getElementById('js-header');

btn.addEventListener('click', () => {
    btn.classList.toggle('is-open');
    header.classList.toggle('-open');
});