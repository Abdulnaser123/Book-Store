/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../Redux/Actions";

const BookFavoritesItem = ({ cart }) => {
  const books = useSelector((state) => state.books);
  const { id } = cart;

  const book = books.find((book) => book.id === Number(id));
  const { title, thumbnail } = book;
  const dispatch = useDispatch();

  const handleCartRemove = () => {
    dispatch(removeCart(id));
  };

  return (
    <div className='book-item'>
      <div className='row align-items-center justify-content-around'>
        <div className='col-lg-3 col-md-3 col-sm-12 col-12 inline-block'>
          <div className='product-cover w-50 m-auto'>
            <img className='img-fluid' src={thumbnail} alt='' />
          </div>
        </div>
        <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
          <h4>
            <Link to={"/book/details/" + id}>{title}</Link>
          </h4>
        </div>
        <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
          <button onClick={handleCartRemove} className='btn btn-outline-danger'>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookFavoritesItem;
