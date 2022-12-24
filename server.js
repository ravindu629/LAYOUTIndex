const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;
const uri =
  "mongodb+srv://admin-ravindu:IT19208022@cluster0.n8e35.mongodb.net/Practical_Test_DB_LAYOUTIndex?retryWrites=true&w=majority";

//DB connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});

app.get("/", (req, res) => {
  res.send("Api running");
});

//import routes for Products
app.use("/api/products", require("./routes/Product.route"));

app.listen(port, () => {
  console.log("Server is starting on port " + port);
});
