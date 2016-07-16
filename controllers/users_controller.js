const User = require('../models/user')

function AllUsers (req, res) {
  User.find({}, function (err, users) {
    if (err) return res.status(401).json({ error: 'users not found' })
    res.status(200).json(users)
  })
}
