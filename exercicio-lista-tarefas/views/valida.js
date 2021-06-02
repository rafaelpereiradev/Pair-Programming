window.addEventListener('submit', (e) => {
  e.preventDefault();
});

// Pegando os Inputs
const inputNome = document.querySelector('.nome-cadastro');
const inputUser = document.querySelector('.username-cadastro');
const inputSenha = document.querySelector('.senha-cadastro');
const btnCadastra = document.querySelector('#btn-cadastra');
const divRenderiza = document.querySelector('#renderiza');
const labelNome = document.querySelector('.label-nome');
const labelUser = document.querySelector('.label-user');
const labelSenha = document.querySelector('.label-senha');

btnCadastra.addEventListener('click', (e) => {
  const nome = inputNome.value;
  const username = inputUser.value;
  const senha = inputSenha.value;
  renderiza(nome, username, senha);
});
function renderiza(nome, user, senha) {
  function criaP(titulo, valor, id) {
    const p = document.createElement('p');
    const verifica = (string) => /\s/g.test(string) || string.length == 0;
    if (verifica(valor)) {
      valor = 'caractere inválido, ou campo vazio.';
      p.innerHTML = `<b>${titulo}</b>${valor}`;
      p.classList.add(id);
      console.log(p);
      return trataErro(p);
    } else {
      p.innerHTML = `<b>${titulo}</b>${valor}`;
      return p;
    }
  }

  const dadosUsuario = {
    nome: criaP('Nome do Usuário :', nome, 'nome'),
    username: criaP('Username : ', user, 'user'),
    senha: criaP('Senha : ', senha, 'senha'),
  };

  const quebra = document.createElement('br');

  divRenderiza.appendChild(dadosUsuario.nome);
  divRenderiza.appendChild(dadosUsuario.username);
  divRenderiza.appendChild(dadosUsuario.senha);
  divRenderiza.appendChild(quebra);
}

function trataErro(p) {
  p.className == 'nome'
    ? (p.style.color = `rgb(255,0,0)`)(labelNome.appendChild(p))
    : p.className == 'user'
    ? (p.style.color = `rgb(255,0,0)`)(labelUser.appendChild(p))
    : p.className == 'senha'
    ? (p.style.color = `rgb(255,0,0)`)(labelSenha.appendChild(p))
    : mostraDados();
}
