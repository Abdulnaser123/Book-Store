/** @format */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearchedBooks, getSearchString } from "../Redux/Actions";

const Search = () => {
  const searchString = useSelector((state) => state.searchString);
  console.log(searchString);
  const dispatch = useDispatch();
  const [keywords, setKeywords] = useState("");

  const handleChange = (e) => {
    const newKeywords = e.target.value;
    setKeywords(newKeywords);
    dispatch(getSearchedBooks(keywords));
    dispatch(getSearchString(e.target.value));
  };

  useEffect(() => {
    if (searchString === "") {
      setKeywords("");
    }
  }, [searchString]);

  return (
    <input
      onChange={handleChange}
      style={{ width: "50%" }}
      className='form-control py-4 m-auto'
      type='search'
      placeholder='e.g. CalculusII'
      value={keywords}
    />
  );
};

export default Search;
