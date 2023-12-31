/** @format */

import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearSearch, fetchBooks } from "../Redux/Actions";
import Book from "./Book";
import { generatePaginationButtons } from "../functions/generatePaginationButtons.js";

const Books = () => {
  const books = useSelector((state) => state.books);
  const searchedBooks = useSelector((state) => state.searchedBooks);
  const searchString = useSelector((state) => state.searchString);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const booksToDisplay = searchString === null ? books : searchedBooks;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='container'>
      <h1
        style={{ marginLeft: "20px", color: "#000" }}
        className='display-4 text-center mb-3'
      >
        {searchString === null ? (
          "All Books"
        ) : (
          <Fragment>
            Searching for '{searchString}'
            <span
              onClick={() => dispatch(clearSearch())}
              className='btn btn-danger ml-2'
            >
              X
            </span>
          </Fragment>
        )}
      </h1>

      <div className='row'>
        {booksToDisplay.slice(startIndex, endIndex).map((book) => {
          const { id } = book;
          return <Book key={id} bookDetails={book} />;
        })}
      </div>
      <hr />
      <div className='pagination d-flex justify-content-center'>
        {generatePaginationButtons(
          handlePageChange,
          currentPage,
          booksToDisplay,
        )}
      </div>
    </div>
  );
};

export default Books;
