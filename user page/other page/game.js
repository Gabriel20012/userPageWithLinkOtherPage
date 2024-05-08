const btn = document.querySelector('.btn--increment');
const contBtn = document.querySelector('.btn--cont');
const reset = document.querySelector('.btn--reset');


const resetCount = function () {
    contBtn.textContent = 0;
}

const incremetNumber = function () {
    contBtn.textContent++;
}



btn.addEventListener('click', incremetNumber);
reset.addEventListener('click', resetCount);
