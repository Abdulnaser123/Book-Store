/** @format */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart, removeBook, fetchBooks } from "../Redux/Actions";
import { HeartFill, Trash2Fill } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();

  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const history = useHistory();
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
  const handleRemove = (id) => {
    dispatch(removeBook(Number(id)));
    history.push(`/`);
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
            <button
              className='btn btn-danger border-primary rounded-pill'
              onClick={() => handleRemove(id)}
            >
              <Trash2Fill size={20} color={"white"} /> Remove Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
