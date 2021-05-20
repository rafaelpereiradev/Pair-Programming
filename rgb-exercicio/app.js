window.addEventListener('submit', (e) => {
  e.preventDefault();
});
const rangeRed = document.querySelectorAll('.rangered');
const rangeGreen = document.querySelector('.rangegreen');
const rangeBlue = document.querySelector('.rangeblue');
const inputRed = document.querySelector('.inputred');
const inputGreen = document.querySelector('.inputgreen');
const inputBlue = document.querySelector('.inputblue');
const divRGB = document.querySelector('.rgb');

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
    : console.log('Faça sua cor');
});

function renderizaRed(value) {
  inputRed.value = value && inputRed;
  // inputRed.value = value;
  console.log('red ok');
}
function renderizaGreen(value) {
  rangeGreen.value = value;
  inputGreen.value = value;
  console.log('green ok');
}
function renderizaBlue(value) {
  rangeBlue.value = value;
  inputBlue.value = value;
  console.log('blue ok');
}
