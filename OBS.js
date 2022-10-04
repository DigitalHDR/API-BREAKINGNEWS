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
//todo =====================================================
// app.get('/soma', (req, res) => {
//   const soma = 1 + 2
//   res.json(soma)
// })
//! para enviar valores numericos usa-se json
//todo =====================================================
// app.get('/soma', (req, res) => {
//   const soma = 1 + 2

//   res.send({soma: soma})
// })
//! para enviar com send usa-se dentro de um objeto