const mongoose = require("mongoose");

const connectionDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    if (db) {
      console.log("Dtatabase Connection Successfully Done!!!");
    } else {
      console.log("opps!! Dtatabase Connection Failed");
    }
  } catch (error) {
    console.log("Inernal Server Error", error);
  }
};
module.exports = connectionDb;
