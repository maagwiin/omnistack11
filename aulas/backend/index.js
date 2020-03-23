const express = require('express');                 //importa o express

const app = express();                              //cria o app

app.get('/', (request, response) => {               //rota principal
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Magnu Windell'
    });           
});

app.listen(3333);                                   //escuta na porta 3333