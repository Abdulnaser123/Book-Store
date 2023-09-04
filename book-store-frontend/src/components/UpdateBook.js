/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBook } from "../Redux/Actions";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { handleImageChange } from "../functions/image64base";
import { validateForm } from "../functions/validateForm";

const UpdateBook = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const initialFormData = {
    title: "",
    imgSrc: "",
    tags: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const bookToUpdate = books.find((book) => book.id === Number(id));
    if (bookToUpdate) {
      setFormData({
        title: bookToUpdate.title,
        imgSrc: bookToUpdate.thumbnail,
        tags: bookToUpdate.tags.join(", "),
      });
    }
  }, [books, id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(setErrors, formData);
    if (Object.keys(errors).length === 0) {
      const { title, imgSrc, tags } = formData;
      const updatedTags = tags.split(",").map((tag) => tag.trim());
      const bookToUpdate = books.find((book) => book.id === Number(id));

      try {
        await axios.put(`http://localhost:3000/books/${id}`, {
          ...bookToUpdate,
          ...(title && { title }),
          thumbnail: imgSrc,
          tags: updatedTags,
        });

        dispatch(updateBook(id, title, imgSrc, updatedTags));
        history.push(`/`);
      } catch (error) {
        console.error("Error updating the book:", error);
      }
    }
  };

  return (
    <div className='container'>
      <h1 className='display-4 text-center'>Update Book</h1>
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label>Title</label>
          <input
            type='text'
            className='form-control'
            name='title'
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        {errors.title && (
          <div className='alert alert-danger mt-2'>{errors.title}</div>
        )}
        <div className='form-group'>
          <label>Image Base64</label>
          <input
            type='file'
            accept='image/*'
            onChange={(e) => handleImageChange(setFormData, formData, e)}
            className='form-control'
            name='imgSrc'
          />
        </div>
        <div className='form-group'>
          <label>Tags (comma-separated)</label>
          <input
            type='text'
            className='form-control'
            name='tags'
            value={formData.tags}
            onChange={handleInputChange}
          />
        </div>
        {errors.tags && (
          <div className='alert alert-danger mt-2'>{errors.tags}</div>
        )}
        <button type='submit' className='btn btn-primary'>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
