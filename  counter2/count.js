let count = 0;

const countDisplay = document.getElementById('count');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

decreaseBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

function updateDisplay() {
    countDisplay.textContent = count;
}