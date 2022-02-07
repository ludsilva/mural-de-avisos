module.exports = {
//objs-array posts
  posts : [
    {
      id: "01", 
      title: "Teste",
      description: "Descrição do teste"
    },
    {
      id: "02", 
      title: "Teste",
      description: "Descrição do teste"
    },
  ],
//functions

  getAll(){
    return this.posts;
  },

  newPost(title, description){
    this.posts.push({id:generateId(), title, description});
  },

  deletePost(id){
    this.posts = this.posts.filter(el => el.id != id);
  },

  updatePost(){

  },
}

const generateId = () => {
  return Math.random().toString(36).substring(2); //0 a 36 = alfabeto + numeros no valor
  //Id iniciando no indice 2 da string gerada
}

/* const removePostById = (id) => {
  
} */