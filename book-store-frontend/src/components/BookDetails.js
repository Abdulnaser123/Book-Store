/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Import hooks
import { useParams } from "react-router-dom";
import { addCart } from "../Redux/Actions"; // Import the addCart action
import { HeartFill } from "react-bootstrap-icons";

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books); // Access the books state
  const dispatch = useDispatch(); // Get the dispatch function

  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    return (
      <div className='container'>
        <h1 className='display-4 text-center'>Book Not Found</h1>
      </div>
    );
  }

  const { title, thumbnail, description, publisher, tags, authorId } = book;

  const handleAddCart = () => {
    dispatch(addCart(Number(id)));
  };

  return (
    <div className='container'>
      <h1 className='display-4 text-center'>Book Details</h1>
      <div className='card my-4 mx-auto p-3'>
        <div className='row'>
          <div className='col-lg-5 col-12'>
            <img className='img-fluid rounded' src={thumbnail} alt={title} />
          </div>
          <div className='col-lg-7 col-12'>
            <h2 className='mb-4'>{title}</h2>
            <p className='text-muted'>
              <strong>Author:</strong> {authorId}{" "}
            </p>
            <p className='text-muted'>
              <strong>Publisher:</strong> {publisher}
            </p>
            <div className='mb-4'>
              <strong>Description:</strong>
              <p>{description}</p>
            </div>
            <div className='mb-4'>
              <strong>Tags:</strong>
              <p>{tags.join(", ")}</p>
            </div>
            <button
              className='btn btn-light border-primary rounded-pill'
              onClick={handleAddCart}
            >
              <HeartFill size={20} color={"red"} /> Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
