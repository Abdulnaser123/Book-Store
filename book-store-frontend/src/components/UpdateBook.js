/** @format */
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const UpdateBook = () => {
  const { id } = useParams();
  const { books, updateBook } = useContext(Context);
  const history = useHistory();

  const initialFormData = {
    title: "",
    imgSrc: "",
    tags: "",
  };

  const [formData, setFormData] = useState(initialFormData);
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

    const { title, imgSrc, tags } = formData;
    const updatedTags = tags.split(",").map((tag) => tag.trim());
    const bookToUpdate = books.find((book) => book.id === Number(id));
    console.log(title, imgSrc, tags);

    try {
      await axios.put(`http://localhost:3000/books/${id}`, {
        ...bookToUpdate,
        ...(title && { title }),
        thumbnail: imgSrc,
        tags: updatedTags,
      });

      updateBook(id, title, imgSrc, updatedTags);
      history.push(`/book/details/${id}`);

      window.location.reload();
    } catch (error) {
      console.error("Error updating the book:", error);
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
        <div className='form-group'>
          <label>Image URL</label>
          <input
            type='text'
            className='form-control'
            name='imgSrc'
            value={formData.imgSrc}
            onChange={handleInputChange}
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
        <button type='submit' className='btn btn-primary'>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
