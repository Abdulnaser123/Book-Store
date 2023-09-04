/** @format */

import React, { Fragment } from "react";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";
import UpdateBook from "./components/UpdateBook";
import AddBook from "./components/AddBook";
import Footer from "./components/Footer";
import BookFavorites from "./components/BookFavorites";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <Fragment>
              <Header />
              <Books />
            </Fragment>
          )}
        />
        <Route path='/book-favorites' component={BookFavorites} />
        <Route path='/book/details/:id' component={BookDetails} />
        <Route path='/book/update/:id' component={UpdateBook} />
        <Route path='/addBook' component={AddBook} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
