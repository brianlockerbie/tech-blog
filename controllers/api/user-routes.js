const router = require('express').Router();
const { User, Post } = require('../../models');

// get all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Post,
        attributes: ['id', 'title', 'content', 'created_at']
      }
    ]
  })
  .then(dbUserData => {
    if(!dbUserData) {
        res.status(404).json({ message: 'User ID not found.' });
        return;
    };

    res.json(dbUserData);
  })
  .catch(err => {
      console.log(err);
      res.status(400).json(err);
})
});

module.exports = router;