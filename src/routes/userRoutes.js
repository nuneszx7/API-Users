

const express = require('express')

const router = express.Router()

const userController = require('../controller/userController')

//Criando as rotas da nossa API

//1° Rota para obter todos os usuários
router.get('/', userController.getAllUsers)

//2° Rota para obter dados de um usuario por ID
router.get('/:id', userController.getUserById)

//3° Rota para criar um novo usuário
//router.post('/', userController.createUser)

module.exports = router