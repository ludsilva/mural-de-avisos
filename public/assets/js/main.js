document.addEventListener('DOMContentLoaded', () =>{
  updatePosts();
});

const updatePosts = () => {
  const url = '/api/all';

  //pegar a lista
  fetch(url).then(response => {
    return response.json();
  }).then(json => {
    let postElements = '';
    let posts = JSON.parse(json);

    posts.map((post) => {
      let postElement = `
      <div class="card mb-4 text center" id=${post.id}>
        <div class="card-header text-center">
          <h5 class="card-title">${post.title}</h5>
        </div>
        <div class="card-body text-center">
          <div class="card-text">
            ${post.description}
          </div>
        </div>
        <div class="card-footer text-center">
          <a class="card-link">
            Deletar <i class="far fa-trash-alt pe-2" id='${post.id}' onclick="deletePosts(this)"></i> 
          </a>
          <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Editar <i class="far fa-edit"></i>
          </button>
        </div>
      </div>
      `
      postElements += postElement;
    });

   document.getElementById('posts').innerHTML = postElements;
  });

}

const newPost = () => {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let post = {title, description};

  const url = '/api/new';
  const options = {
    method: "POST",
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify(post)
  }

  fetch(url, options).then(response => {
    console.log(response);
    updatePosts();
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
  })
}
document.getElementById('save').addEventListener('click', newPost);

const deletePosts = (post) => {

  let id = {id: post.id}; 
  const url = '/api/delete';
  const options = {
    method: "DELETE",
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify(id)
  }

  fetch(url, options).then(response => {
    updatePosts();
  })
}

const editPost = () => {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;

  
} 