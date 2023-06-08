// jshint esversion :6

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Fruitdbs', {
  useNewUrlParser: true
});

const AppleSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Apple", AppleSchema);

const apple = new Fruit({
  name: "Apple",
  rating: 8,
  review: "Pretty good"
});

apple.save().then(() => console.log('Data Save Successful!'));





