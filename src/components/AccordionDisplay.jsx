import React from "react";

const AccordionDisplay = (props) => {
  const { question, answer, open, handleOnClick, indexProp } = props;
  console.log(open);
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
          onClick={handleOnClick}
          style={{
            borderRadius: "10px",
            backgroundColor: "rgb(64, 207, 209)",
            padding: "20px",
            textAlign: "left",
            color: "black",
            fontSize: "15px",

            cursor: "pointer",
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

        {open === true && (
          <div style={{ display: open ? "block" : "none" }}>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default AccordionDisplay;
