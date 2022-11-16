const { Post } = require('../models');

// post seeds for the database
const post = [
    {
        title: "Handlebars is... interesting...",
        date_created: "1/3/2021",
        content: "I think handlebars is an interesting way to go about building an application but I think React makes way more sense!",
        user_id: 1
    },
    {
        title: "I think handlebars is great!",
        date_created: "5/1/2021",
        content: "I'm a big fan of reverse russian doll structure! It makes total sense for the main file to be on the inside rather than the outside of the file structure!",
        user_id: 4
    },
    {
        title: "What new languages is everyone learning?",
        date_created: "10/1/2022",
        content: "I believe JavaScript to be one of the best and most powerful coding languages out there. If you need power, look to JavaScript.",
        user_id: 7
    }
]

const seedPost = () => Post.bulkCreate(post);

module.exports = seedPost;