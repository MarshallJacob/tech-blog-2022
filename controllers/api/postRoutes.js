const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

// create a new post and "POST" it to the db
router.post('/', withAuth, async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    res.status(200).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update functionality for the user to update posts
router.put('/', withAuth, async (req, res) => {
  try {
    Post.update({
      title: req.body.title,
      content: req.body.content,
    },
    // identifies the specific post that the user would like to update
    {
      where: {
        id: req.body.id,
      }
    })
    res.status(400).json(err);
  } catch (results) {
    res.status(200).json(results);
  }
});

// deletes the users selected post
router.delete('/:id', withAuth, async (req, res) => { 
  try {
    const postData = await Post.destroy({ 
      // identifies the specific post that the user wishes to delete
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    // notification if the post id is not found
    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
    
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
