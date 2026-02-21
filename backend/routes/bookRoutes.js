import express from "express";
import {
  getAllBooks,
  getBookID,
  editBook,
  deleteBook,
  addBook,
} from "../controller/bookController.js";

const router = express.Router();

router.get("/", getAllBooks);

router.get("/:id", getBookID);

router.put("/:id", editBook);

router.delete("/:id", deleteBook);

router.post("/", addBook);

export default router;
