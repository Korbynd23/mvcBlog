const deleteButton = document.querySelector('#del-post-btn');
const updateButton = document.querySelector('#edit-post-btn')

const editId = document.querySelector(`input[name="postId"]`).value;


const newCharHandler = async (event) => {
  event.preventDefault();
  
    const newTitle = document.querySelector('#formTextarea1').value;
    const newText = document.querySelector('#formTextarea2').value;

    const response = await fetch(`/api/posts/${editId}`, {
        method: 'PUT',
        body: JSON.stringify({
          editId,
          newTitle,
          newText
          
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to update post.');
      }
    };

const deleteClickHandler = async function() {
  await fetch(`/api/posts/${editId}`, {
    method: 'DELETE'
  });
  document.location.replace('/');
}


updateButton.addEventListener("click", newCharHandler);
deleteButton.addEventListener("click", deleteClickHandler);
