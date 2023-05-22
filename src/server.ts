import mongoose from "mongoose";
import app from "./index";
const port:number = 5000;

// database connection
async function Connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Books");
    console.log("Database connection established");
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
Connect();
