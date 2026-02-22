import React, { useState } from "react";
import Spinner from "../component/spinner";
import BackButton from "../component/BackButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateBook = () => {
  const [loading, setLoading] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:8888/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-2xl my-4 text-center">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-800 rounded-xl p-4 w-[600px] mx-auto">
        <div className="my-4">
          <label htmlFor="" className="text-xl mr-4">
            Title
          </label>
          <input
            className="border-2 border-gray-500 px-4 py-2 w-full"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label htmlFor="" className="text-xl mr-4">
            Author
          </label>
          <input
            className="border-2 border-gray-500 px-4 py-2 w-full"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label htmlFor="" className="text-xl mr-4">
            PublishYear
          </label>
          <input
            className="border-2 border-gray-500 px-4 py-2 w-full"
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>
        <div className="my-4">
          <button
            className="w-full border-2 py-2 bg-blue-400 text-white"
            onClick={handleSaveBook}
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
