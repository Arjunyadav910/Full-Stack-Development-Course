const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "arun",
    to: "tarun",
    msg: "Hii, How are you?",
    created_at: new Date(),
  },
  {
    from: "adarsh",
    to: "adesh",
    msg: "fun time ahead",
    created_at: new Date(),
  },
  {
    from: "amit",
    to: "sumit",
    msg: "teaches javaScript",
    created_at: new Date(),
  },
  {
    from: "savik",
    to: "sohail",
    msg: "lets meet at 7'O clock",
    created_at: new Date(),
  },
  {
    from: "nikhil",
    to: "akash",
    msg: "send me question papers",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
