const router = require('express').Router();
const Comment = require('../../models/Comment');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Comment.findAll({})
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment_text: req.body.commentText,
      userId: req.session.userId,
      postId: req.body.postId,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router