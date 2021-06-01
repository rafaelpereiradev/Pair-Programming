const btnLogin = document.querySelector('.btn-login');
const input = document.querySelectorAll('input');


btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const username = input[0].value;
    const password = input[1].value;
    if(username && password) {
        console.log('IF');
    }
    console.log('OK');
});