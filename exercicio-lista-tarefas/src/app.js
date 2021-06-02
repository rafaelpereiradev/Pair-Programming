const express = require('express');
const app = express();
// const path = require('path');
// // const diretorioHtml = path.resolve('/views');

//criando rota
app.use('/', require('../routers/userRoute'));
app.use('/login', require('../routers/userRoute'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(diretorioHtml + '/index.html'));
//   console.log(diretorioHtml);
// });
// app.use(express.static(diretorioHtml));

// // Servidor é o ultimo a ser aberto.
app.listen(3000);
