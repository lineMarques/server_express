const express = require("express");

const app = express();

const porta = 3002;

app.listen(porta, function () {
  console.log(`Servidor Rodando na porta ${porta}`);
});

app.get("/", function (req, resp) {
  resp.send(
    `<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <h1>Olá Pessoal!!!!</h1>
        <p>Acesse o formulario</p>
        <a href="/formulario">Formulario</a>
    </body>
</html>`
  );
});

app.get("/formulario", function (req, resp) {
  resp.send(

    ` <h1>Preencha o Formulario</h1>
    <form action="">
        <label for="nome">Nome: </label><br>
        <input type="text">

        <label for="idade">Idade: </label>
        <input type="text">

        <input type="button" value="enviar"><br>
    </form>
    <a href="/">Voltar</a>  
    `
  );
});
