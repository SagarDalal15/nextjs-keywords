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
        <div
          style={{
            height: "30px",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "20px",
            backgroundColor: "white",
            width: "30px",
            color: "#3f0e40",
          }}
        >
          A
        </div>
      </div>
      {props.children}
    </Fragment>
  );
}
