const { listUser } = require("../../model/dataUser");

window.addEventListener('submit', (e) => {
  e.preventDefault();
});

const btn = document.querySelector('.btn');
const inputLista = document.querySelector('#tarefa');
const mostra = document.querySelector('#mostra');
inputLista.textContent = 'teste';
const p = document.createElement('p');

mostra.appendChild(p);

btn.addEventListener('click', () => {
  p.textContent = inputLista.value;
  inputLista.value = '';
});

console.log(listUser())