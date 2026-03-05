
import { useState } from 'react';
import './App.css'

function App() {

// let open = false;
// function handleOpen(){
// open = true;
// }  
 const [open,setOpen] = useState(false)

  return (
    <>
    <div style={{width:"1000px", margin:"auto"}}>
      <div 
        style={{ 
        borderRadius:"10px",
        backgroundColor:"lightblue", 
        padding:"20px", 
        textAlign:"left",
        color:"black",
        }}
         onClick={()=> setOpen(!open)}
        //  onClick={()=>alert("hello")}
        //  onClick={()=>handleClick}
      > 
        <p > 
          What is Jsx?
        </p>
      </div>
      <div style={{ display: open ? "block" : "none"}}>
        <p>
          JSX (JavaScript XML) is a syntax extension for JavaScript, primarily used with React to describe UI components using an HTML-like structure. It makes code easier to write and maintain by allowing developers to write markup directly within JavaScript files. JSX is transpiled into standard 
        </p>
        </div>  
    </div>
    
    </>
  )
}

export default App
