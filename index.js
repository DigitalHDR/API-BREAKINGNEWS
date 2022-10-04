const express = require('express')
const app = express()

// ROTA
  // Method http - CRUD (create, read. update, delete)
    // GET - pega um informação
    // POST - cria uma informação
    // PUT - altera toda a info
    // PATH - altera parte da info
    // DELETE - apaga uma informação

  // Name - um identificador da rota


  // Function (Callback) - responsavel por executar algum comando
  //! callback >>> uma função que executa dentro de outra função

app.get('/soma', (req, res) => {
  const soma = 1 + 2

  res.send({soma: soma})
})

app.listen(3000)