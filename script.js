// Deel 1 en 2
let buttons = document.querySelector('#mybutton')

buttons.addEventListener('click', function () {
    alert("button clicked");
});

// Deel 3 en 4
let bgColor2 = document.querySelector('.blue-background')

bgColor2.addEventListener('click', function () {
    bgColor2.classList.toggle("red-background");
});