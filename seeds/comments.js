const { Comment } = require('../models');

const commentData = [
    {
        userId: 1,
        postId: 1,
        comment_text: "This is amazing!"
    },
    {
        userId: 3,
        postId: 2,
        comment_text: "I have a question!"
    },
    {
        userId: 1,
        postId: 3,
        comment_text: "Wow! Thats crazy, I better be cautious.."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;