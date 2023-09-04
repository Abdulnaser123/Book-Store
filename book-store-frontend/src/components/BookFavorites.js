/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { ArrowReturnLeft } from "react-bootstrap-icons";
import BookFavoritesItem from "./BookFavoritesItem";
import { Heartbreak } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const BookFavorites = () => {
  const carts = useSelector((state) => state.carts);

  return (
    <div className='container mt-5'>
      <h1 className='display-4 text-center mb-4'>Book Favorites</h1>

      {carts.length === 0 ? (
        <div className='text-center'>
          <h2>Your favorites are empty. Add some books.</h2>
          <Heartbreak size={290} color={"tomato"} className={"mt-4"} />
        </div>
      ) : (
        <div className='d-flex flex-column align-items-center'>
          {carts.map((cart) => (
            <div key={cart.id} className='border p-3 mb-3'>
              <BookFavoritesItem cart={cart} />
            </div>
          ))}

          <hr className='w-100 my-4' />

          <Link to='/' className='btn btn-outline-primary'>
            Back To Shopping <ArrowReturnLeft />
          </Link>
        </div>
      )}
    </div>
  );
};

export default BookFavorites;
