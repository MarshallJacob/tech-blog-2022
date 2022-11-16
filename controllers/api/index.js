const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// Determines the url routes for users, posts, and comments
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;