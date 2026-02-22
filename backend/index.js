import express from "express";
import { PORT, CLIENT } from "./config/config.js";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";
import { DBConnect } from "./config/db.js";

const app = express();

//Middleware
app.use(
  cors({
    origin: CLIENT,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

//Routes
app.use("/books", bookRoutes);

app.get("/", (req, res) => {
  console.log("Getting the app");
  return res.status(200).send("helloo");
});

//Connect DB & Start Server
await DBConnect();

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});
