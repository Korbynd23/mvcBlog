const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes')
const dashRoutes = require('./dashboardRoutes')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashRoutes)

module.exports = router;