import React from "react";
import { useState } from "react";

function QNADisplay(props) {
  const { question, answer } = props;

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={{
          width: "1000px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "10px",
        }}
      >
        <div
          style={{
            borderRadius: "10px",
            backgroundColor: "rgb(64, 207, 209)",
            padding: "20px",
            textAlign: "left",
            color: "black",
            fontSize: "15px",
            cursor: "pointer",
          }}
          onClick={function () {
            setOpen(!open);
          }}
        >
          <p style={{ textAlign: "left", margin: 0 }}>{question}</p>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              float: "right",
              marginTop: "-30px",
              marginRight: "10px",
            }}
          >
            {open ? "-" : "+"}
          </span>
        </div>
        <div style={{ display: open ? "block" : "none" }}>
          <p>{answer}</p>
        </div>
      </div>
    </>
  );
}

export default QNADisplay;
