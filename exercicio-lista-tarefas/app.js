const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', require('./routers/user'));
app.use('/cadastro', require('./routers/user'));
app.use('/login', require('./routers/user'));

app.listen(3000);