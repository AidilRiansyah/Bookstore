import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import axios from "axios";
import { API } from "../../../backend/config";
import Spinner from "../component/spinner";
import BooksTable from "../component/home/BooksTable";
import BooksCard from "../component/home/BooksCard";
import { useContext } from "react";
import { ViewContext } from "../utils/ViewContext";

const Home = () => {
  const { viewType, setViewType } = useContext(ViewContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => {
        // console.log(res.data.data);
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="rounded-lg px-4 py-1 bg-sky-300 hover:bg-sky-600 "
          onClick={() => {
            setViewType("table");
          }}
        >
          Table
        </button>
        <button
          className="rounded-lg px-4 py-1 bg-sky-300 hover:bg-sky-600 "
          onClick={() => {
            setViewType("card");
          }}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-500 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : viewType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
