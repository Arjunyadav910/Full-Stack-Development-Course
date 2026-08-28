const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    title: String,
  },
  pricing: {
    type: Number,
  },
});

const Book = mongoose.model("Book", bookSchema);

Book.insertMany([
  { title: "Java Programming", author: "James Gosling", pricing: 1000 },
  { title: "Python", author: "Guido van Rossum", pricing: 1200 },
  { title: "C++", author: "Bjarne Stroustrup", pricing: 800 },
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
