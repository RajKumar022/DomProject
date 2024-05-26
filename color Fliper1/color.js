const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A8"];

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
