import React from "react";
import AccordionDisplay from "./AccordionDisplay";
import { useState } from "react";

const Accordion = (props) => {
  const [openIndex, setOpenIndex] = useState(null);

  const arrQNA = [
    {
      question: "What is Front-End Development?",
      answer:
        "Front-end development is the creation of the user-facing side of websites and applications, focusing on everything users interact with directly, such as layout, design, and interactivity. Using HTML, CSS, and JavaScript, developers build responsive, accessible, and visually appealing interfaces. It bridges design and functionality",
    },
    {
      question: "What is Back-End Development?",
      answer:
        'Backend development is the server-side, "behind-the-scenes" work that powers applications by managing data, logic, and infrastructure. It involves building APIs, managing databases, and ensuring security, allowing the user-facing frontend to function properly. Core technologies include languages like Python, Java, and Node.js, combined with databases like SQL and MongoDB.',
    },
    {
      question: "What is Full-Stack Development?",
      answer:
        "Full-stack development involves working on both the front-end and back-end of applications, requiring knowledge of both client-side and server-side technologies to build complete web applications.",
    },
    {
      question: "What is API Development?",
      answer:
        "API development is the process of creating interfaces that allow different software applications to communicate with each other. It involves designing, building, and maintaining APIs that enable seamless integration and data exchange between systems.",
    },
  ];
  return (
    <>
      <p>Accordion</p>
      {arrQNA.map((qna, index) => (
        <AccordionDisplay
          key={qna.question}
          indexProp={index}
          open={openIndex === index}
          question={qna.question}
          answer={qna.answer}
          handleOnClick={() => {
            if (openIndex === index) {
              setOpenIndex(null);
            } else {
              setOpenIndex(index);
            }
          }}
        />
      ))}
    </>
  );
};

export default Accordion;
