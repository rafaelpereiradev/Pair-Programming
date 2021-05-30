const btnLogin = document.querySelector('.btn-login');
const input = document.querySelectorAll('input');
console.log(input);

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const username = input.querySelector('username').value
    console.log(username.value)
});