/** @format */

import axios from "axios";
import * as ActionTypes from "./ActionsTypes";

export const fetchBooks = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3000/books");
      dispatch({
        type: ActionTypes.FETCH_BOOKS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};
export const fetchAuthors = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3000/authors");
      dispatch({
        type: ActionTypes.FETCH_AUTHORS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};
export const removeBook = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3000/books/${id}`);
      dispatch({
        type: ActionTypes.REMOVE_BOOK,
        payload: id,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const addCart = (id) => ({
  type: ActionTypes.ADD_CART,
  payload: id,
});

export const updateCart = (id, quantity) => ({
  type: ActionTypes.UPDATE_CART,
  payload: { id, quantity },
});

export const removeCart = (id) => ({
  type: ActionTypes.REMOVE_CART,
  payload: id,
});

export const fetchCart = (carts) => ({
  type: ActionTypes.FETCH_CART,
  payload: carts,
});

export const getSearchString = (searchString) => ({
  type: ActionTypes.GET_SEARCHED_STRING,
  payload: searchString,
});

export const getSearchedBooks = (searchString) => ({
  type: ActionTypes.GET_SEARCHED_BOOKS,
  payload: searchString,
});

export const clearSearch = () => ({
  type: ActionTypes.CLEAR_SEARCH,
});

export const updateBook = (id, title, thumbnail, tags) => ({
  type: ActionTypes.UPDATE_BOOK,
  payload: {
    id,
    title,
    thumbnail,
    tags,
  },
});

export const addBook = (newBook) => ({
  type: ActionTypes.ADD_BOOK,
  payload: newBook,
});
