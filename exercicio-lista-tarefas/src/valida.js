window.addEventListener('submit', (e) => {
  e.preventDefault();
});

// Pegando os Inputs
const inputNome = document.querySelector('.nome-cadastro');
const inputUser = document.querySelector('.username-cadastro');
const inputSenha = document.querySelector('.senha-cadastro');
const btnCadastra = document.querySelector('#btn-cadastra');
const divRenderiza = document.querySelector('#renderiza');

btnCadastra.addEventListener('click', (e) => {
  const nome = inputNome.value;
  const username = inputUser.value;
  const senha = inputSenha.value;
  renderiza(nome, username, senha);
});
function renderiza(nome, user, senha) {
  function criaP(titulo, valor) {
    const verifica = (string) => /\s/g.test(string) || string.length == 0;
    if (verifica(valor) == true) valor = 'caractere inválido, ou campo vazio.';
    const p = document.createElement('p');
    p.innerHTML = `<b>${titulo}</b>${valor}`;
    return p;
  }
  const nomeRender = criaP('Nome do Usuário :', nome);
  const userRender = criaP('Username : ', user);
  const senhaRender = criaP('Senha : ', senha);

  divRenderiza.appendChild(nomeRender);
  divRenderiza.appendChild(userRender);
  divRenderiza.appendChild(senhaRender);
  criaBtnEdita();
  criaBtnOk();
  // divRenderiza.appendChild(btnEdita);
}

function criaBtnOk() {
  const btnRegistra = document.createElement('button');
  btnRegistra.classList.add('btn-login');
  btnRegistra.textContent = 'Cadastrar';
  divRenderiza.appendChild(btnRegistra);
}
function criaBtnEdita() {
  const btnEdita = document.createElement('button');
  btnEdita.style.marginLeft = '40px';
  btnEdita.classList.add('btn-login');
  btnEdita.textContent = 'Editar';
  divRenderiza.appendChild(btnEdita);
}
