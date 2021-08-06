import KeywordFilter from "./keyword-filter";
import FilterTable from "./filter-table";
import { Button } from "react-bootstrap";

export default function HomePage(props) {
  return (
    <div
      style={{
        backgroundColor: "#E5E5E5",
        minHeight: "100vh",
        height: "fit-content",
      }}
    >
      <KeywordFilter />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "70px",
        }}
      >
        <FilterTable data={props.recordsData} />

        <Button
          style={{
            margin: "5px",
            backgroundColor: "#3f0e40",
            border: "none",
            width: "145px",
            height: "40px",
          }}
        >
          VIEW RESULTS
        </Button>
      </div>
    </div>
  );
}
