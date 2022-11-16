// functionaliy for deleting an existing post
async function deleteHandler(event) {
    event.preventDefault();

    const id = event.target.dataset.id;

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    };
};
// event listener looping through any existing posts
const deleteBtnEl = document.getElementsByClassName('deleteBtn');

for(let i = 0; i < deleteBtnEl.length; i++) {
    const element = deleteBtnEl[i];
    element.addEventListener('click', deleteHandler);
};

