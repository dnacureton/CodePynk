function addComment() {
    var commentText = document.getElementById('commentText').value;
    if (commentText === '') {
        return;
    }

    var commentsList = document.getElementById('commentsList');

    var newComment = document.createElement('li');
    newComment.textContent = commentText;
    commentsList.appendChild(newComment);

    document.getElementById('commentText').value = '';
}
