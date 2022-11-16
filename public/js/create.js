// handle create post functionality
async function newPost(event) {
  event.preventDefault();

  const title = document.querySelector('#postTitle').value;
  const content = document.querySelector('#postContent').value;
  // using the "POST" method to create a new post
  const response = await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      content: content,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    createPost.classList.remove('hide');
    postForm.classList.add('hide');
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};
// shows posts after creation
function showPostCreation() {
  const createPost = document.querySelector('#createPost');
  const postForm = document.querySelector('#postForm');
  postForm.classList.remove('hide');
  createPost.classList.add('hide');
};
// event listener for creating a new post
document.querySelector('.newPostForm').addEventListener('submit', newPost);
createPost.addEventListener('click', showPostCreation)