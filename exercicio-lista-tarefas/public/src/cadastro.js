// window.addEventListener('submit', (e) => {
//   e.preventDefault();
// });

// Pegando os Inputs
const inputNome = document.querySelector('.nome-cadastro');
const inputUser = document.querySelector('.username-cadastro');
const inputSenha = document.querySelector('.senha-cadastro');
const btnCadastra = document.querySelector('#btn-cadastra');
const divRenderiza = document.querySelector('#renderiza');
const labelNome = document.querySelector('.label-nome');
const labelUser = document.querySelector('.label-user');
const labelSenha = document.querySelector('.label-senha');
const span = document.getElementById('span');

btnCadastra.addEventListener('click', () => {
  const nome = verifica(inputNome.value);
  const username = verifica(inputUser.value);
  const senha = verifica(inputSenha.value);

  if (nome) {
    erroNome(nome);
  }
  if (username) {
    erroUser(username);
  }
  if (senha) {
    erroSenha(senha);
  }
  if (nome == false && username == false && senha == false) {
    renderizaOk();
  }
  console.log(nome, username, senha);
  function verifica(valor) {
    return /\s/g.test(valor) || valor.length == 0;
  }

  function criaP() {
    const p = document.createElement('p');
    return p;
  }

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
  function renderizaOk() {
    const nomeOk = criaP();
    const userOk = criaP();
    const senhaOk = criaP();
    const titulo = document.createElement('h3');
    render();
    function render() {
      nomeOk.innerHTML = `<b>Nome</b> : ${inputNome.value}`;
      userOk.innerHTML = `<b>Username</b> : ${inputUser.value}`;
      senhaOk.innerHTML = `<b>Senha</b> : ${inputSenha.value}`;
      titulo.innerText = 'Usuário criado com sucesso!';

      divRenderiza.appendChild(titulo);
      divRenderiza.appendChild(nomeOk);
      divRenderiza.appendChild(userOk);
      divRenderiza.appendChild(senhaOk);
    }
  }

  // function renderizaOkUser() {
  //   const p = criaP();
  //   p.innerHTML = inputUser.value;
  //   divRenderiza.appendChild(p);
  //   return;
  // }
  // function renedrizaOkSenha() {
  //   const p = criaP();
  //   p.innerHTML = inputUser.value;
  //   divRenderiza.appendChild(p);
  //   return;
  // }
});

inputNome.addEventListener('click', (e) => {
  if (labelNome.childElementCount == 2) {
    labelNome.lastElementChild.remove();
  }
});
inputUser.addEventListener('click', (e) => {
  if (labelUser.childElementCount == 2) {
    labelUser.lastElementChild.remove();
  }
});
inputSenha.addEventListener('click', (e) => {
  if (labelSenha.childElementCount == 2) {
    labelSenha.lastElementChild.remove();
  }
});

//renderiza(nomeVerificado, usernameVerificado, senhaVerificada);

// function renderiza(nome, user, senha) {
//   const dadosUsuario = {
//     nome: criaP('Nome do Usuário :', nome, 'nome'),
//     username: criaP('Username : ', user, 'user'),
//     senha: criaP('Senha : ', senha, 'senha'),
//   };

// function criaP(titulo, valor, id) {
//   const p = document.createElement('p');
//   if (verifica(valor)) {
//     p.innerHTML = `${titulo} contêm caractére inválido,ou está vazio.`;
//     p.classList.add(id);

//     p.classList.add('erro');
//     return trataErro(p);
//   }
//   p.innerHTML = `<b>${titulo}</b>${valor}`;
//   p.classList.add(id);
//   return p;
// }
// criaForm(dadosUsuario);
// }

// function criaForm(obj) {
//   const quebra = document.createElement('br');
//   if (
//     obj.nome != undefined &&
//     obj.username != undefined &&
//     obj.senha != undefined
//   ) {
//     divRenderiza.appendChild(obj.nome);
//     divRenderiza.appendChild(obj.username);
//     divRenderiza.appendChild(obj.senha);
//     divRenderiza.appendChild(quebra);
//   }
//   // trataErro();
// }
// function trataErro(p) {
//   if (p.className == 'erro') {
//     labelNome.appendChild(p);
//   }
// if (typeof p == undefined) {
//   labelNome.appendChild(p);
//   console.log(p);
// }
// }
// if (p.className == 'user erro' && labelUser.childElementCount > 1) {
//   labelUser.appendChild(p);
// }
// if (p.className == 'senha erro' && labelSenha.childElementCount > 1) {
//   labelSenha.appendChild(p);
// }
// limpaEssa();
// }

// function limpaEssa() {
//   if (labelNome.childElementCount > 1) {
//     labelNome.lastChild.remove();
//   }
// }

//     }
//   });

//   if (e.target.id == '#btn-cadastra') {
//     user.childNodes.forEach((element) => {
//       element.className == 'user erro'.remove();
//     });
//   }
// }

// if (e.target.id == '#btn-cadastra') {
//   senha.childNodes.forEach((element) => {
//     element.className == 'senha erro'.remove();
//   });
// }
