CREATE SCHEMA CADASTRO;
CREATE TABLE CADASTRO.usuario (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    username TEXT NOT NULL,
    senha TEXT,
    DATE TIMESTAMP DEFAULT NOW()
);