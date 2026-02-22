import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../component/BackButton";
import Spinner from "../component/spinner";
import axios from "axios";

const DeleteBook = () => {
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:8888/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("An error happened, please check console");
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="my-4 text-3xl">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-300 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are You Sure You Want To Delete This Book?</h3>
        <button
          className="p-4 bg-red-500 text-white rounded m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete It
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
