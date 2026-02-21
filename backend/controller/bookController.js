import { Book } from "../models/bookModel.js";

const getAllBooks = async (req, res) => {
  try {
    const book = await Book.find({});

    return res.status(200).json({
      count: book.length,
      data: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

const getBookID = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    return res.status(200).json({
      count: book.length,
      data: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

const editBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "please fill the fields" });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "book not found" });
    }

    return res.status(200).send({ message: "Book updated succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).send({ message: "Book deleted succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

const addBook = async (req, res) => {
  try {
    if (!req.body.author || !req.body.title || !req.body.publishYear) {
      return res.status(400).send("Please fill all the required fields");
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export { getAllBooks, getBookID, editBook, deleteBook, addBook };
