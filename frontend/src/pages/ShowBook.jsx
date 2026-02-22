import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../component/BackButton";
import Spinner from "../component/spinner";
import axios from "axios";

const ShowBook = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8888/books/${id}`)
      .then((res) => {
        setBook(res.data.data);
        setLoading(false);
      })
      .then(() => {
        // console.log(book);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 text-center">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-800 rounded-xl p-4 w-fit mx-auto">
          <div className="my-4 ">
            <span className="text-xl mr-4 ">ID:</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4 ">
            <span className="text-xl mr-4 ">Author:</span>
            <span>{book.author}</span>
          </div>
          <div className="my-4 ">
            <span className="text-xl mr-4 ">Publish Year:</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="my-4 ">
            <span className="text-xl mr-4 ">Created At:</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4 ">
            <span className="text-xl mr-4 ">Last Time Updated:</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
