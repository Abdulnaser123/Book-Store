/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { ConfigureStore } from "./Redux/Store";
const store = ConfigureStore();

ReactDOM.render(
  <Router basename={"/bookstore"}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root"),
);
