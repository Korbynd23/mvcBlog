const createButton = document.querySelector('#create-post');

const newCharHandler = async (event) => {
    event.preventDefault();
  
    const newTitle = document.querySelector('#post-title').value;
    const newText = document.querySelector('#post-text').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
          newTitle,
          newText
          
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      if (response.ok) {
        // res.status(200).json(response);
        document.location.replace('/');
      } else {
        alert('Failed to create post.');
      }
    }



createButton.addEventListener("click", newCharHandler);