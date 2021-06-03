exports.homePage = (req, res, next) => {
    res.render('index');
};

exports.login = (req, res, next) => {
    res.render('login')
}

exports.cadastro = (req, res, next) => {
    res.render('cadastro')
}