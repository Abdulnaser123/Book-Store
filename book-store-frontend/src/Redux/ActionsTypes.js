/** @format */

// ActionTypes.js
export const FETCH_BOOKS = "FETCH_BOOKS";
export const FETCH_AUTHORS = "FETCH_AUTHORS";
export const ADD_CART = "ADD_CART";
export const UPDATE_CART = "UPDATE_CART";
export const REMOVE_CART = "REMOVE_CART";
export const GET_SEARCHED_STRING = "GET_SEARCHED_STRING";
export const GET_SEARCHED_BOOKS = "GET_SEARCHED_BOOKS";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const FETCH_CART = "FETCH_CART";
export const UPDATE_BOOK = "UPDATE_BOOK";
export const ADD_BOOK = "ADD_BOOK";

// /** @format */

// import React, { createContext, useReducer, useEffect } from "react";
// import axios from "axios";
// import reducer from "./Reducers";
// const initialState = {
//   books: [],
//   searchString: null,
//   searchedBooks: [],
//   carts: [],
//   authors: [],
// };
// export const Actions = createContext(initialState);

// export const Provider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     if (localStorage.getItem("carts") !== null) {
//       const fetchedCarts = JSON.parse(localStorage.getItem("carts"));
//       fetchCarts(fetchedCarts);
//     }

//     const apiUrl = "http://localhost:3000/books";

//     axios
//       .get(apiUrl)
//       .then((response) => {
//         dispatch({
//           type: "FETCH_BOOKS",
//           payload: response.data,
//         });
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//     axios
//       .get("http://localhost:3000/authors")
//       .then((response) => {
//         dispatch({
//           type: "FETCH_AUTHORS",
//           payload: response.data,
//         });
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("carts", JSON.stringify(state.carts));
//   }, [state.carts]);

//   //actions
//   const fetchCarts = (fetchedCarts) => {
//     dispatch({
//       type: "FETCH_CART",
//       payload: fetchedCarts,
//     });
//   };

//   const addCart = (id) => {
//     dispatch({
//       type: "ADD_CART",
//       payload: id,
//     });
//   };

//   const updateCart = (id, quantity) => {
//     dispatch({
//       type: "UPDATE_CART",
//       payload: { id, quantity },
//     });
//   };

//   const updateBook = (id, title, thumbnail, tags) => {
//     dispatch({
//       type: "UPDATE_BOOK",
//       payload: {
//         id,
//         title,
//         thumbnail,
//         tags,
//       },
//     });
//   };

//   const addBook = (newBook) => {
//     dispatch({ type: "ADD_BOOK", payload: newBook });
//   };

//   const removeCart = (id) => {
//     dispatch({
//       type: "REMOVE_CART",
//       payload: id,
//     });
//   };

//   const getSearchString = (searchString) => {
//     dispatch({
//       type: "GET_SEARCHED_STRING",
//       payload: searchString,
//     });
//   };

//   const getSearchedBooks = (searchString) => {
//     getSearchString(searchString);
//     dispatch({
//       type: "GET_SEARCHED_BOOKS",
//       payload: searchString,
//     });
//   };

//   const clearSearch = () => {
//     dispatch({
//       type: "CLEAR_SEARCH",
//     });
//   };

//   return (
//     <Actions.Provider
//       value={{
//         books: state.books,
//         authors: state.authors,
//         carts: state.carts,
//         searchedBooks: state.searchedBooks,
//         searchString: state.searchString,
//         addCart,
//         updateCart,
//         removeCart,
//         getSearchString,
//         getSearchedBooks,
//         clearSearch,
//         fetchCarts,
//         updateBook,
//         addBook,
//       }}
//     >
//       {children}
//     </Actions.Provider>
//   );
// };
