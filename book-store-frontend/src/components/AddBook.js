/** @format */

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook, fetchAuthors } from "../Redux/Actions";
import { handleImageChange } from "../functions/image64base";
import { validateForm } from "../functions/validateForm";
import { useHistory } from "react-router-dom";

const AddBook = () => {
  const authors = useSelector((state) => state.authors);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);

  const initialFormData = {
    title: "",
    authorId: 0,
    thumbnail: "",
    description: "",
    publisher: "",
    isbn: "",
    favorite: false,
    tags: "",
  };

  const history = useHistory();

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(initialFormData);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm(setErrors, formData);
    if (!Object.keys(errors).length) {
      const newBook = {
        ...formData,
      };
      dispatch(addBook(newBook));

      try {
        await axios.post(`http://localhost:3000/books/`, {
          ...newBook,
        });

        history.push(`/`);
      } catch (error) {
        console.error("Error Adding the book:", error);
      }
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "tags" ? value.split(",") : value,
    }));
  };

  return (
    <div className='container'>
      <h1 className='display-4 text-center'>Adding Book</h1>
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label>Title</label>
          <input
            type='text'
            className='form-control'
            value={formData.title}
            name='title'
            onChange={handleInputChange}
          />

          {errors.title && (
            <div className='alert alert-danger mt-2'>{errors.title}</div>
          )}
        </div>

        <div className='form-group'>
          <label>Author</label>
          <select
            className='form-control'
            name='authorId'
            value={formData.authorId}
            onChange={handleInputChange}
            required
          >
            <option value=''>Select an author</option>
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
          {errors.author && (
            <div className='alert alert-danger mt-2'>{errors.author}</div>
          )}
        </div>

        <div className='form-group'>
          <label>Description (optional)</label>
          <textarea
            className='form-control'
            value={formData.description}
            name='description'
            onChange={handleInputChange}
          />
        </div>

        {errors.description && (
          <div className='alert alert-danger mt-2'>{errors.description}</div>
        )}

        <div className='form-group'>
          <label>imgSrc URL</label>
          <input
            type='file'
            className='form-control'
            name='thumbnail'
            accept='image/*'
            onChange={(e) => handleImageChange(setFormData, formData, e)}
          />
        </div>

        <div className='form-group'>
          <label>Publisher</label>
          <input
            type='text'
            className='form-control'
            value={formData.publisher}
            name='publisher'
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Tags -separate tags by comma-</label>
          <input
            type='text'
            className='form-control'
            value={formData.tags}
            name='tags'
            onChange={handleInputChange}
          />
        </div>

        {errors.tags && (
          <div className='alert alert-danger mt-2'>{errors.tags}</div>
        )}

        <button type='submit' className='btn btn-primary'>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
