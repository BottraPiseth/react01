import React from "react";
import { useState } from "react";

function QNA() {
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
          }}
          onClick={function () {
            setOpen(!open);
          }}
        >
          <p style={{ padding: "10px" }}>What is JSX?</p>
        </div>
        <div style={{ display: open ? "block" : "none" }}>
          <p>
            JSX (JavaScript XML) is a syntax extension for JavaScript, primarily
            used with React to describe UI components using an HTML-like
            structure. It makes code easier to write and maintain by allowing
            developers to write markup directly within JavaScript files. JSX is
            transpiled into standard
          </p>
        </div>
      </div>
    </>
  );
}

export default QNA;
