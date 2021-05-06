const btnLogin = document.querySelector('.btn');
const inputName = document.querySelector('.name');
const inputPassword = document.querySelector('.password');
const form = document.querySelector('.form');
const divAlerta = document.querySelector('.alerta');
console.log(divAlerta);
const alerta = 'erro';
const p = document.createElement('p');
divAlerta.appendChild(p);
document.addEventListener('click', (e) => {
  e.preventDefault();
});

window.addEventListener('click', (e) => {
  if (e.target.className == 'btn') {
    const textoName = inputName.value;
    const textoPassword = inputPassword.value;
    verificaLogin(textoName, textoPassword);
    limpaInput();
  }
});

function limpaInput() {
  if (inputName.value != '' && inputPassword.value != '') {
    inputName.value = '';
    inputPassword.value = '';
  }
}
const usu = 'rafael.pereira';
const senha = 'qwe@123';
function verificaLogin(name, password) {
  name !== usu || password !== senha
    ? (p.innerHTML = 'ERRO! Usuário ou Senha incorreto.')
    : (p.innerHTML = 'Login feito com sucesso');
}

setInterval(() => {
  p.innerHTML = '';
}, 5000);
