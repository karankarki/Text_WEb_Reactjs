import React from 'react'
import {useState} from 'react'


let main_text = "Enter you text here :) \n";
export default function Afheader(props) {
  
  const [text,setText] = useState("Enter you text here :) \n");
  // text = "newtext";

  function Uppperclicked(){
    console.log("The Upper is clicked");
    let upval = text;
    upval = upval.toUpperCase();
    setText(upval);

  }
  function LowerClick(){
    console.log("The Upper is clicked");
    let upval = text;
    upval = upval.toLowerCase();
    setText(upval);

  }
  function UppperChnage(event){
    console.log("The Upper value is changed");
    main_text = event.target.value;
    setText(event.target.value);

  }

  function removeEx() {
    let str = text;
    let regx = /\s+/g;
    str = str.replace(regx," ");  
    setText(str);
  }

  function restore() {
    setText(main_text);
  }

  function copyText() {
    // text.select();
    navigator.clipboard.writeText(text);
    console.log("Text is copied");
    alert("Copied the text: " + text);
  }
  return (
    <div className="container1">
    <div className="area">
      <textarea value={text} onChange={UppperChnage} name="Text" id="text_area" >
      
      </textarea>
    </div>
    <div className="box_button">
    <button id="btn_U" onClick={Uppperclicked}  className="btn btn_upper">Uppercase</button>
    <button id="btn_U" onClick={LowerClick} className="btn btn_Lower">Lowercase</button>
    <button className="copy_text btn" onClick={copyText} >Copy</button>
    <button className="copy_text btn" onClick={removeEx} >Remove Spaces</button>
    <button className="copy_text btn" onClick={restore} >Restore_</button>

    </div>
   
  <div className="out_Put">
      <div className={`text-${props.mod==="dark"?"light":"dark"} out_box`}>
          Number oF characters are  <span className="Numchar" id = "ch1">{text.length}</span> and number of words <span id="nu1" className="numwords">{(text.split(" ")).length}</span>
      </div>
  </div>
  </div>
  )
}
