/** @format */

import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "./Reducer";
const initialState = {
  books: [],
  searchString: null,
  searchedBooks: [],
  carts: [],
  authors: [],
};
export const Context = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (localStorage.getItem("carts") !== null) {
      const fetchedCarts = JSON.parse(localStorage.getItem("carts"));
      fetchCarts(fetchedCarts);
    }

    const apiUrl = "http://localhost:3000/books";

    axios
      .get(apiUrl)
      .then((response) => {
        // Update state using dispatch
        dispatch({
          type: "FETCH_BOOKS",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    axios
      .get("http://localhost:3000/authors")
      .then((response) => {
        // Update state using dispatch
        dispatch({
          type: "FETCH_AUTHORS",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(state.carts));
  }, [state.carts]);

  //actions
  const fetchCarts = (fetchedCarts) => {
    dispatch({
      type: "FETCH_CART",
      payload: fetchedCarts,
    });
  };

  const addCart = (id) => {
    dispatch({
      type: "ADD_CART",
      payload: id,
    });
  };

  const updateCart = (id, quantity) => {
    dispatch({
      type: "UPDATE_CART",
      payload: { id, quantity },
    });
  };

  const updateBook = (id, title, thumbnail, tags) => {
    dispatch({
      type: "UPDATE_BOOK",
      payload: {
        id,
        title,
        thumbnail,
        tags,
      },
    });
  };

  const addBook = (newBook) => {
    dispatch({ type: "ADD_BOOK", payload: newBook });
  };

  const removeCart = (id) => {
    dispatch({
      type: "REMOVE_CART",
      payload: id,
    });
  };

  const getSearchString = (searchString) => {
    dispatch({
      type: "GET_SEARCHED_STRING",
      payload: searchString,
    });
  };

  const getSearchedBooks = (searchString) => {
    getSearchString(searchString);
    dispatch({
      type: "GET_SEARCHED_BOOKS",
      payload: searchString,
    });
  };

  const clearSearch = () => {
    dispatch({
      type: "CLEAR_SEARCH",
    });
  };

  return (
    <Context.Provider
      value={{
        books: state.books,
        authors: state.authors,
        carts: state.carts,
        searchedBooks: state.searchedBooks,
        searchString: state.searchString,
        addCart,
        updateCart,
        removeCart,
        getSearchString,
        getSearchedBooks,
        clearSearch,
        fetchCarts,
        updateBook,
        addBook,
      }}
    >
      {children}
    </Context.Provider>
  );
};
