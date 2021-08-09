import { Fragment } from "react";
import classes from "./navigation-bar.module.css";
import SearchBar from "./search-bar";

export default function NavigationBar(props) {
  return (
    <Fragment>
      <div className={classes.navigationbar}>
        <div className={classes.header}> KEYWORDS</div>
        <div className={classes.searchbar}>
          <SearchBar />
        </div>
        <div className={classes.profile}>A</div>
      </div>
      {props.children}
    </Fragment>
  );
}
