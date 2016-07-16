const mongoose = require('mongoose')

const MakanSchema = new mongoose.Schema({
  name: String, unique: true,
  longitude: String,
  latitude: String,
  address: String,
  type: String,
  categories: String,
  price: Number
})

const Makan = mongoose.model('Makan', MakanSchema)

module.exports = Makan
