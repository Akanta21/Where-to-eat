const mongoose = require('mongoose')

const MakanSchema = new mongoose.Schema({
  name: String, unique: true,
  longitude: String,
  latitude: String,
  Address: String,
  Type: String,
  Categories: String,
  tags: [],
  score: Number
})

const Makan = mongoose.model('Makan', MakanSchema)

module.exports = Makan
