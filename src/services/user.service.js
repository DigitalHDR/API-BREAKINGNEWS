const User = require('../models/User')

const createService = body => User.create(body)

const findAllService = () => User.find()

const findByIdService = id => User.findById(id)

const updateService = (
  id,
  name,
  username,
  email,
  password,
  avatar,
  background
) =>
//! essa é uma função in-line o return esta implícito antes do User

  User.findOneAndUpdate(
    { _id: id }, //! vai procurar pelo id para fazer as mudanças
    { name, username, email, password, avatar, background }
    //! itens que vão ser alterados(atualizados)
  )

module.exports = {
  createService,
  findAllService,
  findByIdService,
  updateService,
}
