import React, { useEffect, useState } from "react";
import BackButton from "../component/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../../backend/config";
import Spinner from "../component/spinner";
import axios from "axios";

const EditBook = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API}/${id}`)
      .then((response) => {
        setTitle(response.data.data.title);
        setAuthor(response.data.data.author);
        setPublishYear(response.data.data.publishYear);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert("An error happened, please check console");
        console.log(err);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`${API}/${id}`, data)
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
      <h1 className="text-2xl text-center">Edit Book</h1>
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
            onClick={handleEditBook}
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
