const router = require('express').Router();
const Post = require('../../models/Post');


router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id
            }
        })
        const posted = postData.get({ plain: true });
        console.log(posted)
        res.render('edit', {
            posted,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;