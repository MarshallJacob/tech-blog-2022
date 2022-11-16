const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

// pull information from database to diplay to the user
router.get('/', withAuth, async (req, res) => {
    try{
      const postData = await Post.findAll({
        where: {user_id: req.session.user_id},
      })
      const posts = postData.map((post) => post.get({ plain:true }));
      res.render('dashboard', { 
        posts,
        loggedIn: req.session.loggedIn 
      });
  } catch (err) {
    res.status(500).json(err);
  }
  });


module.exports = router;
