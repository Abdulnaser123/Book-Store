/** @format */

import React, { useState } from "react";
import { connect } from "react-redux";
import { addCart } from "../Redux/Actions"; // Import your addCart action
import { Link } from "react-router-dom";
import { HeartFill, BookHalf, Pen } from "react-bootstrap-icons";
const Book = ({ bookDetails, addCart }) => {
  const { id, title, thumbnail, tags } = bookDetails;

  const handleAddCart = () => {
    addCart(id);
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='col-lg-3 col-md-4 col-sm-6 col-12 d-flex flex-column my-2'>
      <div className='cover-img'>
        <img src={thumbnail} alt='' />
        <div className='details'>
          <div className='content'>
            <h1>
              <HeartFill
                size={100}
                onClick={handleAddCart}
                color={isHovered ? "gold" : "red"}
                className='btn align-items-center justify-content-center'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </h1>
            <h5>
              <Link style={{ color: "#fff" }} to={"/book/details/" + id}>
                {title}
              </Link>
            </h5>
            <h6>
              {tags.map((tag, index) => (
                <div key={index} style={{ color: "orange" }}>
                  {tag}
                </div>
              ))}
            </h6>
          </div>
        </div>
      </div>

      <div className='bottom'>
        <Link
          className='btn btn-outline-primary'
          to={"/book/details/" + id}
          key={id}
        >
          Details <BookHalf />
        </Link>
        <Link className='btn btn-outline-info' to={"/book/update/" + id}>
          Update <Pen />
        </Link>
      </div>
    </div>
  );
};

export default connect(null, { addCart })(Book);
