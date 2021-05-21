window.addEventListener('submit', (e) => {
  e.preventDefault();
});
const root = document.documentElement;
const rangeRed = document.querySelector('.rangered');
const rangeGreen = document.querySelector('.rangegreen');
const rangeBlue = document.querySelector('.rangeblue');
const inputRed = document.querySelector('.inputred');
const inputGreen = document.querySelector('.inputgreen');
const inputBlue = document.querySelector('.inputblue');
const divRGB = document.querySelector('.rgb');
divRGB.style.backgroundColor = `rgb(0, 0, 0)`;

window.addEventListener('input', (e) => {
  e.target.className == 'input rangered' ||
  e.target.className == 'input inputred'
    ? renderizaRed(e.target.value)
    : e.target.className == 'input rangegreen' ||
      e.target.className == 'input inputgreen'
    ? renderizaGreen(e.target.value)
    : e.target.className == 'input rangeblue' ||
      e.target.className == 'input inputblue'
    ? renderizaBlue(e.target.value)
    : console.log('');
});

function renderizaRed(value) {
  rangeRed.value = value;
  inputRed.value = value;
  renderizaRGB();
}
function renderizaGreen(value) {
  rangeGreen.value = value;
  inputGreen.value = value;
  renderizaRGB();
}
function renderizaBlue(value) {
  rangeBlue.value = value;
  inputBlue.value = value;
  
  renderizaRGB();
}
function renderizaRGB() {
  divRGB.style.backgroundColor = `rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})`;
}
