window.addEventListener('submit', (e) => {
  e.preventDefault();
});

const inputLista = document.querySelector('#tarefa');
const mostra = document.querySelector('#mostra');
inputLista.textContent = 'teste';
const p = document.createElement('p');
p.textContent = 'ppp';
mostra.appendChild(p);
