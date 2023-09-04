/** @format */

const initialState = {
  books: [], // Initial books array
  searchString: null,
  searchedBooks: [],
  carts: [], // Initial carts array
  authors: [], // Initial authors array
};

export const Reducer = (state = initialState, action) => {
  const { carts } = state;
  let cartIndex;

  switch (action.type) {
    case "ADD_CART":
      cartIndex = carts.findIndex((cart) => cart.id === Number(action.payload));
      if (cartIndex !== -1) {
        carts[cartIndex].quantity = carts[cartIndex].quantity + 1;
        return {
          ...state,
          carts: [...carts],
        };
      } else {
        return {
          ...state,
          carts: [...state.carts, { id: action.payload, quantity: 1 }],
        };
      }

    case "FETCH_CART":
      return {
        ...state,
        carts: [...state.carts, ...action.payload],
      };

    case "UPDATE_CART":
      cartIndex = carts.findIndex((cart) => cart.id === action.payload.id);
      if (cartIndex !== -1) {
        carts[cartIndex].quantity = action.payload.quantity;
      }
      return {
        ...state,
        carts: [...carts],
      };

    case "REMOVE_CART":
      return {
        ...state,
        carts: state.carts.filter((cart) => cart.id !== action.payload),
      };
    case "GET_SEARCHED_STRING":
      return {
        ...state,
        searchString: action.payload.trim() === "" ? null : action.payload,
      };
    case "GET_SEARCHED_BOOKS":
      const reg = new RegExp(`${action.payload}`, "gi");
      return {
        ...state,
        searchedBooks: state.books.filter((book) => book.title.match(reg)),
      };

    case "CLEAR_SEARCH":
      return {
        ...state,
        searchString: null,
        searchedBooks: [],
      };

    case "FETCH_BOOKS":
      return {
        ...state,
        books: action.payload,
      };
    case "UPDATE_BOOK":
      const { id, title, thumbnail, tags } = action.payload;
      const updatedBooks = state.books.map((book) => {
        if (book.id === id) {
          return {
            ...book,
            title,
            thumbnail,
            tags,
          };
        }
        return book;
      });
      return {
        ...state,
        books: updatedBooks,
      };

    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case "FETCH_AUTHORS":
      return {
        ...state,
        authors: action.payload,
      };

    default:
      return state;
  }
};
