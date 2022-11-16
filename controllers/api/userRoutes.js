const router = require('express').Router();
const { User } = require('../../models');

// handles the creation of a new user
router.post('/', async (req, res) => {
    try {
      const userData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      
      // saves the session data
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id = userData.id;
        res.status(200).json(userData);
      });
  
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

  // handles the auth of the user 
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      // makes sure that it's the correct user
      where: {
        email: req.body.email
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);
    // validate the user password
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// handle the logout functionality 
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


module.exports = router;
