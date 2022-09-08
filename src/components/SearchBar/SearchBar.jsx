const SearchBar = (props) => {
    const { searchTerm, handleInput, handleClick } = props;


    return (
      <form className="search-bar">
        <input
          type="text"
          placeholder = "Search by city"
          value={searchTerm}
          onInput={handleInput}
          className="search-bar__input"
        />
      <button type="button" onClick={handleClick}>Enter</button>
      </form>
    );
  };

  
  export default SearchBar;