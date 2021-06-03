const database = require('../infra/database');
const bcrypt = require('bcrypt');

exports.createUser = () => {
    return database.query(`INSERT INTO CADASTRO.usuario VALUES ()`)
};