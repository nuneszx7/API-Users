
const userModel = require('../model/userModel');

//Método do Controlador para listar os usuários
const getAllUsers = (req, res) => {
    const users = userModel.findAll();
    res.status(200).json(users);
}

//Método do controlador para obter um usuário por ID
const getUserById = (req, res) => {

    //Pegando o id que foi enviado na requisição
    const id = parseInt(req.params.id)

    //Chamado o metodo do findById do userModel
    const user = userModel.findById(id)

    if(user){
        //Responder com status code de 200 (Sucesso!)
        //e devolver os dados do usuário em formato json
        res.status(200).json(user)
    }else{
        res.status(404).json({mensagem: 'Usuário não encontrado no banco de dados!'})
    }

}

module.exports = {
    getAllUsers,
    getUserById
}