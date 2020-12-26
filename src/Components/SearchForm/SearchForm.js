import React from "react";
import "./SearchForm.css";
import { useGlobalContext } from "../../Context/Context"
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const inputHandler = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <div className="form--control">
        <label className="searchLabel" htmlFor="name">
          Search Your favorite Cocktail...
        </label>
        <input className="searchInput" name="name" type="text" onChange={e => inputHandler(e)} />
      </div>
    </form>
  );
};

export default SearchForm;
