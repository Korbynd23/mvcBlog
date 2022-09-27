const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');


// CREATE a new post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.newTitle,
      text: req.body.newText,
      userId: req.session.userId,
      // loggedIn: req.session.loggedIn  -- still doesnt work
    });
    res.status(200).json(newPost);
    console.log(newPost)
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE posts by id
router.put('/:id', withAuth, (req, res) => {

  Post.update(
    {
      title: req.body.newTitle,
      text: req.body.newText
    },
    {
      where: {
        id: req.body.editId,
      },
    }
  )
    .then((updatedPost) => {
      res.json(updatedPost);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// DELETE post by route
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;