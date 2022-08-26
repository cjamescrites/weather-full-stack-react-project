const SearchBar = (props) => {
    const { searchTerm, handleInput } = props;
  
    
    
    return (
      <form className="search-bar">
        <input
          type="text"
          placeholder = "Search beers"
          value={searchTerm}
          onInput={handleInput}
          className="search-bar__input"
        />
      </form>
    );
  };

  
  export default SearchBar;