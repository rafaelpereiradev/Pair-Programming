window.addEventListener('submit', (e) => {
  e.preventDefault();
});
// Pegando os Inputs
const inputNome = document.querySelector('nome-cadastro');
const inputUsername = document.querySelector('input username-cadastro');
const inputSenha = document.querySelector('input senha-cadastro');
const btnCadastra = document.querySelector('#btn-cadastra');

btnCadastra.addEventListener('click', (e) => {
  renderiza(inputNome.value, inputUsername.value, inputSenha.value);
});
function renderiza(nome, user, senha) {
  console.log(nome);
}
