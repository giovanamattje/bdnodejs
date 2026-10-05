const express = require("express");
const mysql = require("mysql2");

const app = express();

app.use(express.json());

app.use(express.json());
app.use(express.static("public"));

const conexao = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "root123",
    database: "escola"
});

conexao.connect((erro) =>{
    if (erro){
        console.log("Erro ao conectar ao MySQL: ", erro);
    }else{
        console.log("Conectado ao MySQL!");
    }
});

app.listen(3000, () => {
    console.log("Servidor: https://localhost:3000");
});