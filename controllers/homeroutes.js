const router = require('express').Router();
const { Comment, User, Post } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        User,
        {
          model: Comment,
          include: [User]
        }
      ]
    });

    const postMetaData = postData.map((newData) => newData.get({ plain: true }));
    // console.log(postMetaData)
    res.render('landing-page', {
      postMetaData,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// GET posts by id
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {
        id: req.params.id
      },
      include: [Comment]
    })
    const posted = postData.get({ plain: true });
    console.log(posted)
    res.render('comment', {
      posted,


    });


  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.render('login');
    return;
  }

  res.render('login');
});


module.exports = router;