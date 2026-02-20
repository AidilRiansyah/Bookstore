import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
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
        {books.map((book, index) => (
          <tr key={book._id}>
            <td className="border border-slate-600 rounded-md ">{index + 1}</td>
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
  );
};

export default BooksTable;
