import classes from "./search-bar.module.css";

const SearchBar = () => (
  <form action="/" method="get">
    <div style={{ display: "flex" }}>
      <input
        className={classes.input}
        type="text"
        id="header-search"
        name="searchbar"
      />
      <div className={classes.buttonDiv}>Submit{"->"}</div>
    </div>
  </form>
);

export default SearchBar;
