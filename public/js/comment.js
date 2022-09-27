const commentBtn = document.querySelector('#commentBtn')

const newComment = async (event) => {
  event.preventDefault();

  const commentText = document.querySelector('#formTextarea').value;
    
    const postId = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    console.log(commentText)
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({
        postId,
        commentText
        
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to comment on post.');
    }
  };
    
    
    commentBtn.addEventListener("click", newComment);
    
