const output = document.getElementById('output');
const postIdInput = document.getElementById('postId');

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

function showResult(data) {
  output.textContent = JSON.stringify(data, null, 2);
}

function getAllPosts() {
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => showResult(data))
    .catch(err => showResult({ error: err.message }));
}

function getPostById() {
  const id = postIdInput.value;
  if (!id) return alert('Digite um ID');
  fetch(`${apiUrl}/${id}`)
    .then(res => res.json())
    .then(data => showResult(data))
    .catch(err => showResult({ error: err.message }));
}

function createPost() {
  const newPost = {
    title: 'Novo Post',
    body: 'Conteúdo do post criado via Fetch.',
    userId: 1
  };

  fetch(apiUrl, {   
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(res => res.json())
    .then(data => showResult(data))
    .catch(err => showResult({ error: err.message }));
}

function updatePost() {
  const updatedPost = {
    id: 1,
    title: 'Post Atualizado',
    body: 'Este post foi atualizado com PUT.',
    userId: 1
  };

  fetch(`${apiUrl}/1`, {
    method: 'PUT',
    body: JSON.stringify(updatedPost),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(res => res.json())
    .then(data => showResult(data))
    .catch(err => showResult({ error: err.message }));
}

function deletePost() {
  fetch(`${apiUrl}/1`, {
    method: 'DELETE'
  })
    .then(res => {
      if (res.ok) {
        showResult({ message: 'Post deletado com sucesso.' });
      } else {
        showResult({ error: 'Erro ao deletar.' });
      }
    })
    .catch(err => showResult({ error: err.message }));
}
