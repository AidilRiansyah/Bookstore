import express from "express";
import { PORT, DBURL, CLIENT } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();
app.get("/", (req, res) => {
  console.log("Getting the app");
  return res.status(200).send("helloo");
});

app.use(
  cors({
    origin: CLIENT,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeader: ["Content-Type"],
  })
);
app.use(express.json());

app.use("/books", bookRoutes);

mongoose
  .connect(DBURL)
  .then(() => {
    console.log("Connected to Database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
