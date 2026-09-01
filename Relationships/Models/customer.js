const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// customerSchema.pre("findOneAndDelete", async () => {
//   console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const findCustomers = async () => {
//   let cust1 = new Customer({
//     name: "Arjun yadav",
//   });

//   let order1 = await Order.findOne({ item: "Detergent liquid" });
//   let order2 = await Order.findOne({ item: "Loofah" });

//   cust1.orders.push(order1);
//   cust1.orders.push(order2);

//   let result = await cust1.save();
//   console.log(result);

//   let result = await Customer.find({}).populate("orders");
//   console.log(result);
// };

// findCustomers();

// const addOrders = async () => {
//   let res = await Order.insertMany([
//     { item: "Body wash", price: 220 },
//     { item: "Detergent liquid", price: 149 },
//     { item: "Loofah", price: 100 },
//   ]);

//   console.log(res);
// };

// addOrders();

const addCust = async () => {
  let newCust = new Customer({
    name: "Karan Arjun",
  });

  let newOrder = new Order({
    item: "Burger",
    price: 150,
  });

  newCust.orders.push(newOrder);

  await newOrder.save();
  await newCust.save();

  console.log("added new customer");
};
const delCust = async () => {
  let data = await Customer.findByIdAndDelete("6a970728a4188c534fbfd03d");
  console.log(data);
};
// addCust();
delCust();
