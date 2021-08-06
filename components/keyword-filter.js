import { Form, Button } from "react-bootstrap";
import Image from "next/image";

import classes from "./keyword-filter.module.css";

export default function KeywordFilter() {
  return (
    <div className={classes.keywordFilterWrapper}>
      <div>
        <div className={classes.header}>
          Add Another Keyword
          <div
            style={{
              backgroundColor: "#3f0e40",
              color: "white",
              padding: "0px 10px",
              marginLeft: "10px",
            }}
          >
            1/3
          </div>
          <div style={{ marginLeft: "10px" }}>Upgrade</div>
          <div
            style={{
              marginLeft: "460px",
              fontSize: "15px",
            }}
          >
            Advance search
          </div>
        </div>
        <div className={classes.keywordFilter}>
          <div
            style={{
              width: "20px",
              margin: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              alt="Search Image"
              src="/res/search.png"
              width={100}
              height={100}
            />
          </div>
          <div style={{ width: "70%" }}>
            <Form.Control
              style={{ border: "0px" }}
              type="text"
              placeholder="Enter your filters here"
            />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <Button
              style={{
                backgroundColor: "#3f0e40",
                border: "none",
                width: "145px",
                height: "40px",
              }}
              variant="primary"
            >
              SAVE FILTERS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
