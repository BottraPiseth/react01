import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import QNA from "./components/QNA";

function App() {
  // let open = false;
  // function handleOpen(){
  // open = true;
  // }

  return (
    <>
      <img
        src={reactLogo}
        className="logo react"
        alt="React logo"
        style={{ margin: "10px", padding: "10px" }}
      />
      <QNA />
      <QNA />
      <QNA />
    </>
  );
}

export default App;
