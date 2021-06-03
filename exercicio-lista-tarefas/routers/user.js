const express = require('express');
const router = express.Router();
const controller = require('../controllers/homeController')

router.get('/', controller.homePage);
router.get('/login', controller.login);
router.get('/cadastro', controller.cadastro);

module.exports = router;