require("dotenv").config()
const Product = require("./models/auth-models");
const product = require("./products.json");
const connectionDb = require("./utils/conn");
const saveData = async () => {
  try {
    await connectionDb();
    // await Product.deleteMany();
    const results = await Product.create(product);
    if (results) {
      console.log("Data Save Successfully");
    } else {
      console.log("Some Error Is There Pls Cheak Again!!");
    }
  } catch (error) {
    console.log("Internal Server Error", error);
  }
};
saveData();
