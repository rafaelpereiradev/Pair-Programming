window.addEventListener('submit', (e) => {
  e.preventDefault();
});

//Pegando os Inputs
const inputNome = document.querySelector('.nome-cadastro');
const inputUser = document.querySelector('.username-cadastro');
const inputSenha = document.querySelector('.senha-cadastro');
const btnCadastra = document.querySelector('#btn-cadastra');
const divRenderiza = document.querySelector('#renderiza');
const labelNome = document.querySelector('.label-nome');
const labelUser = document.querySelector('.label-user');
const labelSenha = document.querySelector('.label-senha');
const span = document.getElementById('span');

btnCadastra.addEventListener('click', function iniciaForm() {
  //verificando se já existe uma renderização para o usuário.
  if (divRenderiza.childElementCount == 4) {
    btnCadastra.removeEventListener('click', iniciaForm);
    return;
  }
  const nome = verificaNome(inputNome.value);
  const username = verifica(inputUser.value);
  const senha = verifica(inputSenha.value);

  //envio dos inputs para tratamento
  function verificaNome(nome) {
    if (nome <= 0) {
      // focus();
      erroNome();
      return true;
    }
  }
  if (username) {
    erroUser();
    focus();
  }
  if (senha) {
    focus();
    erroSenha();
  }

  function focus() {
    nome
      ? inputNome.focus()
      : username
      ? inputUser.focus()
      : senha
      ? inputSenha.focus()
      : null;
  }

  if (!nome && !username && !senha) {
    renderizaOk();
  }
  // regex, verifica se existe algum espaço em branco somente para username e senha.
  function verifica(valor) {
    return /\s/g.test(valor) || valor.length == 0;
  }
  //função para criar elementos P
  function criaP() {
    const p = document.createElement('p');
    return p;
  }
  //criando os alertas nos inputs.
  function erroNome() {
    const p = criaP();
    p.innerHTML = 'contêm caractére inválido,ou está vazio.';
    if (labelNome.childElementCount == 2) {
      return;
    }
    labelNome.appendChild(p);
    p.style.color = `rgb(255,0,0)`;
    return;
  }
  function erroUser() {
    const p = criaP();
    p.innerHTML = 'contêm caractére inválido,ou está vazio.';
    if (labelUser.childElementCount == 2) {
      return;
    }
    labelUser.appendChild(p);
    p.style.color = `rgb(255,0,0)`;
    return;
  }
  function erroSenha() {
    const p = criaP();
    p.innerHTML = 'contêm caractére inválido,ou está vazio.';
    if (labelSenha.childElementCount == 2) {
      return;
    }
    labelSenha.appendChild(p);
    p.style.color = `rgb(255,0,0)`;
    return;
  }
  //criando os elementos para renderizar
  function renderizaOk() {
    const nomeOk = criaP();
    const userOk = criaP();
    const senhaOk = criaP();
    const titulo = document.createElement('h3');
    render();

    // Renderizando as Informações do Usuário
    function render() {
      nomeOk.innerHTML = `<b>Nome</b> : ${inputNome.value.trim()}`;
      userOk.innerHTML = `<b>Username</b> : ${inputUser.value}`;
      senhaOk.innerHTML = `<b>Senha</b> : ${inputSenha.value}`;
      titulo.innerText = 'Usuário criado com sucesso!';

      divRenderiza.appendChild(titulo);
      divRenderiza.appendChild(nomeOk);
      divRenderiza.appendChild(userOk);
      divRenderiza.appendChild(senhaOk);
    }
  }
});
//limpando os alertas dos inputs
window.addEventListener('keyup', (e) => {
  if (
    e.target.className == 'nome-cadastro' &&
    labelNome.childElementCount == 2
  ) {
    labelNome.lastElementChild.remove();
  }
  if (
    e.target.className == 'username-cadastro' &&
    labelUser.childElementCount == 2
  ) {
    labelUser.lastElementChild.remove();
  }
  if (
    e.target.className == 'senha-cadastro' &&
    labelSenha.childElementCount == 2
  ) {
    labelSenha.lastElementChild.remove();
  }
});
