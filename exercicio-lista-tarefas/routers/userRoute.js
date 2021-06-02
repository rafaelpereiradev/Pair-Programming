const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const diretorioHtml = path.resolve('./views');

router.get('/', (req, res) => {
      res.sendFile(path.join(diretorioHtml + '/index.html'));
      console.log(diretorioHtml);
    });
    app.use(express.static(diretorioHtml));

router.get('/login', (req, res) => {
    res.send('Olá');
});

module.exports = router;