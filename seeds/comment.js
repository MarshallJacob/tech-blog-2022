const { Comment } = require('../models');

// comment seeds for the database
const comment = [
    {
        id: 1,
        comment: "Mostly Javascript. It's great!",
        user_id: 5,
        post_id: 4,
    },
    {
        id: 2,
        comment: "I'm pretty into React! It's really awesome! Handlebars is kind of trash...",
        user_id: 1,
        post_id: 3,
    },
    {
        id: 3,
        comment: "Agree to Disagree...",
        user_id: 2,
        post_id: 1,
    },
]

const seedComments = () => Comment.bulkCreate(comment);

module.exports = seedComments;