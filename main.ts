import express from "express"
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Exercicio de CRUD
// Utilizando as 5 funções encontradas em db, crie 5 endpoints para o recurso "usuario".
// (Leia em README para saber mais sobre as funções)
/* 
    O recurso usuario deve ter as seguintes propriedades com seus respectivos tipos:
    { 
        name: String, 
        email: String, 
        password: String 
    }
*/

app.listen(3030, () => {
  console.log("Esse servidor está rodando em http://localhost:3030")
})