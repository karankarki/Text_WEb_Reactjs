
import './App.css';
import Header from './Components/Header';
import Afheader from './Components/Afheader';
import React, { useState } from 'react';
import About_D from './Components/About_D';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// let mode = "dark";
function App() {
  const [mode,setmode] = useState("light");
 function Chmode(){
   if(mode === "dark"){
    //  console.log("i am dark")
    //  mode = "light";
     setmode("light");
     document.body.style.backgroundColor = "#d5ded9";
    }
    else{
      //  mode = "dark";
      setmode("dark");
      document.body.style.backgroundColor = "black";
   }
 }
  
  return (
    
<Router>
    <Header H = "Home" A = "About"Chan = {Chmode} mod= {`${mode}`}  />

<Routes>
          <Route path="/about" element={<About_D/>}/>
          <Route path="/" element={ <Afheader mod= {`${mode}`} />} />
   
        </Routes>

  
  </Router>

  );
}

export default App;

// console.log(" Appjs hello world!\n");

