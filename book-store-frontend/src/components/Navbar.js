/** @format */

import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import { HeartFill } from "react-bootstrap-icons";

const Navbar = () => {
  const { carts } = useContext(Context);
  return (
    <div className='bg-dark border-bottom sticky-top shadow-sm p-3 px-md-4 mb-3'>
      <div className='container d-flex flex-column flex-md-row align-items-center'>
        <Link
          className='heading my-0 mr-md-auto font-weight-normal'
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: 500,
            fontSize: "2rem",
            fontFamily: "Source Code Pro, monospace",
          }}
          to='/'
        >
          BookUniverse
        </Link>
        <nav className='my-2 my-md-0 mr-md-3'>
          <Link className='p-2 text-white' to='/addBook'>
            Add a Book
          </Link>
        </nav>

        <Link
          className='btn btn-light border-primary rounded-pill'
          to='/book-favorites'
        >
          <HeartFill color='red' /> ({" "}
          <span>{carts.length !== 0 ? carts.length : 0}</span> )
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
