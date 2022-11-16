const { User } = require('../models');

// user seeds for database and testing functionality
const user = [
    {
      username: "Tom",
      email: "tom@email.com",
      password: "password1234"
    },
    {
      username: "NotTOM",
      email: "nottom@notmail.com",
      password: "password2134"
    },
    {
      username: "JuanCarlos",
      email: "jcarlos@email.com",
      password: "pass1w2o3r4d"
    },
    {
      username: "DonJulio",
      email: "donjulio@donquixote.com",
      password: "quixote1234"
    },
    {
      username: "Charles",
      email: "charles@fancymail.com",
      password: "imbetterthanyou?"
    },
    {
      username: "Stacy",
      email: "stacy@email.com",
      password: "passeswords"
    },
    {
      username: "Cateline",
      email: "caite@email.com",
      password: "12344321yes"
    },
    {
      username: "Marsh",
      email: "marsh@email.com",
      password: "password"
    }

  ]

  const seedUser = () => User.bulkCreate(user);

  module.exports = seedUser;