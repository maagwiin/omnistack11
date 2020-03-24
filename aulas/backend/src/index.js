const express = require('express');
const cors = require('cors'); 
const routes = require("./routes");

const app = express();      

app.use(cors());
app.use(express.json());  //informa ao exprees o corpo das requisições, transformar o json em algo que a aplicação entenda
app.use(routes);

app.listen(3333);