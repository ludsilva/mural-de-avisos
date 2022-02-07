const express = require('express');
const router = express.Router();
const posts = require('../model/posts');


//Get - retornar o array de obj com todos os posts disponiveis
router.get("/all", (request, response) => {

  response.json(JSON.stringify(posts.getAll())); //retornar em string

});

//Post - criar um novo post e colocar no array
router.post("/new", express.json(), (request, response) =>{
  
  let title = request.body.title;
  let description = request.body.description;

  posts.newPost(title, description);

  response.send("Post adicionado com sucesso.")

});

router.delete("/delete", express.json(), (request, response)=> {
  
  let id = request.body.id;
  posts.deletePost(id);

  response.send("Id deletado com sucesso");
});

//router.put("/update", (request, response) => {})


module.exports = router;