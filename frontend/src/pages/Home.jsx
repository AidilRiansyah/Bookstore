import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import axios from "axios";
import { API } from "../../../backend/config";
import Spinner from "../../component/spinner";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => {
        console.log(res.data.data);
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
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-500 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2 text-center">
          <thead>
            <tr>
              <td className="border border-slate-600 rounded-md ">No</td>
              <td className="border border-slate-600 rounded-md ">Title</td>
              <td className="border border-slate-600 rounded-md max-md:hidden">
                Author
              </td>
              <td className="border border-slate-600 rounded-md max-md:hidden">
                Publish Year
              </td>
              <td className="border border-slate-600 rounded-md">Operations</td>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td className="border border-slate-600 rounded-md">Operations</td>
              <td className="border border-slate-600 rounded-md">Operations</td>
              <td className="border border-slate-600 rounded-md">Operations</td>
              <td className="border border-slate-600 rounded-md">Operations</td>
              <td className="border border-slate-600 rounded-md">Operations</td>
            </tr> */}
            {books.map((book, index) => (
              <tr key={book._id}>
                <td className="border border-slate-600 rounded-md ">
                  {index + 1}
                </td>
                <td className="border border-slate-600 rounded-md ">
                  {book.title}
                </td>
                <td className="border border-slate-600 rounded-md max-md:hidden ">
                  {book.author}
                </td>
                <td className="border border-slate-600 rounded-md max-md:hidden ">
                  {book.publishYear}
                </td>
                <td className="border border-slate-600 rounded-md ">
                  <div className="flex justify-center gap-4">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="text-xl text-green-500" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-xl text-orange-500" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-xl text-red-500" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
