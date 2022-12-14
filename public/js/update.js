function updatePostCreation() {
    const modal = document.querySelector('.modalBtn');
    modal.classList.remove('hide');
};
function hideModal() {
    const modal = document.querySelector('.modalBtn');
    modal.classList.add('hide');
    document.location.replace('/dashboard');

}

// full funcionlality for updating an existing users post
async function updatePost(event) {
    event.preventDefault();


    const id = document.querySelector("#PostID").value;
    console.log(id)

    const title = document.querySelector('#updateTitle').value;
    const content = document.querySelector('#updateContent').value;
    // using the "PUT" method to update user posts
    const response = await fetch('/api/posts', {
        method: 'PUT',
        body: JSON.stringify({
            title: title,
            content: content,
            id: id,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    };
};

// event listeners for updating a post
document.querySelector('#modalUpdate').addEventListener('click', hideModal);
document.querySelector('#modalUpdate').addEventListener('click', updatePost);
document.querySelector('.updatePost').addEventListener('click', updatePostCreation);
