/** @format */

import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import { ArrowReturnLeft } from "react-bootstrap-icons";
import BookFavaritesItem from "./BookFavoritesItem";
import { Heartbreak } from "react-bootstrap-icons";
const BookFavorites = () => {
  const { carts } = useContext(Context);

  return (
    <div className='container mt-5'>
      <h1 className='display-4 text-center mb-4'>Book Favoites</h1>

      {carts.length === 0 ? (
        <div className='text-center'>
          <h2>Your favorites is empty. Add some books.</h2>
          <Heartbreak size={290} className={"mt-4"} />
        </div>
      ) : (
        <div className='d-flex flex-column align-items-center'>
          {carts.map((cart) => (
            <div key={cart.id} className='border p-3 mb-3'>
              <BookFavaritesItem cart={cart} />
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
