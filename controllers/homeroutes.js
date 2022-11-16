const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// pull all post information from the db
router.get('/', async (req, res) => {
  const postData = await Post.findAll({
    include: [{
      model: User,
      attributes: ['username']
    }
    ]
  }).catch((err) => {
    res.json(err);
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  res.render('homepage', { posts, loggedIn: req.session.loggedIn });
});

// render login page and logs the user in redirecting them to their dashboard once successfully logged in
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('dashboard');
    return;
  }
  res.render('login', { layout: 'main2' })
});

// signs the user up and directs them to their dashboard when successfull
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('dashboard');
    return;
  }
  res.render('signup', { layout: 'main2' })
});

// select a specific post by id
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findOne(
      {
        where: {
          id: req.params.id
        },
        attributes: [
          'id',
          'title',
          'content',
          'date_created'
        ],
        include: [
          User,
          {
            model: Comment,
            include: [User],
          }
        ]
      })
    const thePost = postData.get({ plain: true });
    res.render('post', {
      thePost,
      loggedIn: req.session.loggedIn
    });
    console.log(thePost)

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;