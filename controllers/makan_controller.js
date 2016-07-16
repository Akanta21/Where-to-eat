const Makan = require('../models/makan')

function AllMakan (req, res) {
  Makan.find({}, function (err, makan) {
    if (err) return res.status(401).json({ error: 'Makan places not found' })
    res.status(200).json(makan)
  })
}

module.exports = {
  AllMakan: AllMakan
}
