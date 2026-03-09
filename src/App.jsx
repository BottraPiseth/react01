import reactLogo from "./assets/react.svg";
import "./App.css";
import Accordion from "./components/Accordion";
import QNA from "./components/QNA";
import AccordionUI from "./components/AccordionUI";
function App() {
  return (
    <>
      <img
        src={reactLogo}
        className="logo react"
        alt="React logo"
        style={{ margin: "10px", padding: "10px" }}
      />
      <AccordionUI />
      <Accordion />
      <QNA />

      <footer>
        <p>&copy; 2026 All rights reserved by PISETH.</p>
      </footer>
    </>
  );
}

export default App;
