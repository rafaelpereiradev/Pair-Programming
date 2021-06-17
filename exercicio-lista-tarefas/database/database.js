const pgp = require('pg-promise')();
const db = pgp({
    user: 'project',
    password: 'project@100',
    host: 'localhost',
    port: 5432,
    database: 'CADASTRO'
});

module.exports = db;