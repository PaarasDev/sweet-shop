import mongoose from "mongoose";
import dotenv from "dotenv";
import Sweet from "../models/sweet.model.js";

dotenv.config();

const sweets = [
  {
    name: "Chocolate Bar",
    category: "Chocolate",
    price: 50,
    quantity: 10,
    image: "/assets/sweets/chocolate-bar.jpg",
    description: "Rich creamy chocolate made from premium cocoa beans.",
  },
  {
    name: "Strawberry Candy",
    category: "Candy",
    price: 20,
    quantity: 33,
    image: "/assets/sweets/strawberry-candy.jpg",
    description: "Sweet and tangy strawberry-flavored candy.",
  },
  {
    name: "Lollipop",
    category: "Candy",
    price: 15,
    quantity: 25,
    image: "/assets/sweets/lollipop.jpg",
    description: "Classic colorful lollipop loved by kids and adults.",
  },
  {
    name: "Milk Cookies",
    category: "Cookies",
    price: 80,
    quantity: 5,
    image: "/assets/sweets/milk-cookies.jpg",
    description: "Crunchy milk cookies baked to perfection.",
  },
  {
    name: "Gummy Bears",
    category: "Gummies",
    price: 30,
    quantity: 50,
    image: "/assets/sweets/gummy-bears.jpg",
    description: "Chewy gummy bears in assorted fruit flavors.",
  },
  {
    name: "Caramel Fudge",
    category: "Fudge",
    price: 60,
    quantity: 0,
    image: "/assets/sweets/caramel-fudge.jpg",
    description: "Soft caramel fudge that melts in your mouth.",
  },
  {
    name: "Tiramisu",
    category: "Dessert",
    price: 70,
    quantity: 15,
    image: "/assets/sweets/tiramisu.jpg",
    description: "Classic Italian dessert with coffee and cocoa flavors.",
  },
  {
    name: "Fruit Chews",
    category: "Candy",
    price: 25,
    quantity: 40,
    image: "/assets/sweets/fruit-chews.jpg",
    description: "Soft fruit chews bursting with fruity goodness.",
  },
];

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    await Sweet.deleteMany({});
    await Sweet.insertMany(sweets);

    console.log("✅ Sweets seeded successfully");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed", err);
    process.exit(1);
  }
})();
