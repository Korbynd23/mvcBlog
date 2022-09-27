const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts that logged in user created
router.get('/', withAuth, (req, res) => {
    Post.findAll({
      where: {
        userId: req.session.userId
      },
      attributes: [
        'id',
        'title',
        'createdAt',
        'text'
      ],
      include: [
        {
          model: User,
          attributes: ['user_name']
        }
      ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


// GET post by id
router.get('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id
            },
            include: [
              {
                model: User,
                attributes: ['user_name']
              },
              {
                model: Comment,
                attributes: ['comment_text'],
                include: [User]
              }
            ]
        })
        const posted = postData.get({ plain: true });
        console.log(posted)
        // res.json(posted)
        res.render('comment', {
            posted,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

router.get('/new', async (req, res) => {
    res.render('new');
});

module.exports = router;