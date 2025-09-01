//Importar o módulo Express 
const express = require('express');

//Importa as rotas de usuário
const userRoutes = require('./src/routes/userRoutes')

//Criar uma aplicação express
const app = express();

//Definir um midleware para analisar json no corpo das requisições
app.use(express.json())

//Definir a porta do servidor que irá escutar
const porta = 8000;

//Definir a rota de teste API
            //req e res são parametros, quando chamar a função get(tipo de requisição) http get
            // a "/" é a rota 
            //req request
            //res é a (resposta) e é o objeto que o servidor usa para enviar os dados de volta para o cliente
        
//Rota de testes de API
app.get('/', (req, res) => {
    res.send("a API de usuário está funcionando!");
})

//Usando as rotas de usuário
app.use('/api/users', userRoutes)

//Inicia o servidor
app.listen(porta, ()=> {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})