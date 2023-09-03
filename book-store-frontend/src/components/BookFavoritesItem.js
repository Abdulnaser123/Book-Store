/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const BookFavaritesItem = ({ cart }) => {
  const { books, removeCart } = useContext(Context);
  const { id } = cart;

  const book = books.filter((book) => book.id === Number(id));
  const { title, thumbnail } = book[0];

  const handleCartRemove = () => {
    removeCart(id);
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

export default BookFavaritesItem;
