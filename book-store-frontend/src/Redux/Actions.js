/** @format */

// actions.js
import axios from "axios";
import * as ActionTypes from "./ActionsTypes";

// Action creators for fetching books and authors
// Action creator for fetching books
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

// Action creators for search
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

// Action creators for updating a book
export const updateBook = (id, title, thumbnail, tags) => ({
  type: ActionTypes.UPDATE_BOOK,
  payload: {
    id,
    title,
    thumbnail,
    tags,
  },
});

// Action creator for adding a book
export const addBook = (newBook) => ({
  type: ActionTypes.ADD_BOOK,
  payload: newBook,
});
