const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const newRoutes = require('./newRoutes');
const commentRoutes = require('./commentRoutes');
const editRoutes = require('./editRoutes')

router.use('/users', userRoutes);
router.use('/posts', postRoutes );
router.use('/new', newRoutes);
router.use('/edit', editRoutes);
router.use ('/comments', commentRoutes);

module.exports = router;