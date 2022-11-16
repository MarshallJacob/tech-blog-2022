const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes');
const dashboardRoutes = require('./dashboardroutes');

// determine the routes in the url
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;