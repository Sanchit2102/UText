import React, { useState } from "react";
import "./index.css"
import toast from 'react-hot-toast';

export default function TextForm(props) {

  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
   toast.success("Converted to Uppercase");
  };
  
  //lowercase
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
   toast.success("Converted to Lowercase");
  };

  //clear text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
   toast.success("Text box is clear");
  };

  //copy
  const handleCopyClick = (event) => {
let copyText = document.getElementById("myBox")
  copyText.select()

//copy in clipboard
  navigator.clipboard.writeText(copyText.value)
  document.getSelection().removeAllRanges();
 toast.success("Copied to clipboard");
};

// remove extra spaces
const handleExtraSpaces=()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
 toast.success("Extra spaces has been removed");
}
 // Function to convert text to Capitalize Each Word
 const handleCapitalize = () => {
  const words = text.split(" ");

  const convertedWords = words.map((word) => {
    const trimmedWord = word.trim();
    return trimmedWord.charAt(0).toUpperCase() + trimmedWord.slice(1).toLowerCase();
  });

  const convertedText = convertedWords.join(" ");

  setText(convertedText);
  toast.success("Text is capitalize");
};

  const handleChange = (event) => {
    setText(event.target.value);
  };

  let buttonStyle ={
    color:props.mode === "dark" ? "black":"white",
    backgroundColor:props.mode==="dark"?"white":"black"
  }

  return (
    <>
  <div className="container mt-5" style={{ color: props.mode === "dark" ? "white" : "black" }}>
    <div className="row">
    <h1 className="mb-4 text-center">{props.heading}</h1>
      <div className="col-md-6">
        <div className="mb-3">
          <textarea
            className="form-control border border-dark mt-5"
            value={text}
            onChange={handleChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className="mid-container">
          <button className="btn mx-1 my-1" style={buttonStyle} disabled={text.length === 0} onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn mx-1 my-1" style={buttonStyle} disabled={text.length === 0} onClick={handleLowClick}>
            Convert to Lowercase
          </button>
          <button className="btn mx-1 my-1" style={buttonStyle} disabled={text.length === 0} onClick={handleCapitalize }>
            Capitalize
          </button>
          <button className="btn mx-1 my-1" style={buttonStyle} disabled={text.length === 0} onClick={handleExtraSpaces}>
            Remove extra spaces
          </button>
          <button className="btn mx-1 my-1" style={buttonStyle} disabled={text.length === 0} onClick={handleCopyClick}>
            Copy to clipboard
          </button>
          <button className="btn mx-1 my-1" style={buttonStyle} disabled={text.length === 0} onClick={handleClearClick}>
            Clear text
          </button>
         
        </div>
      </div>
      <div className="col-md-6 mt-4 text-center">
        <div className="container mt-4 " style={{ color: props.mode === "dark" ? "white" : "black", marginRight: "20px" }}>
          <h2>Your text Summary</h2>
          <div className="container">
            <p style={{ marginRight: "20px" }}>
              {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} Characters
            </p>
            <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
          </div>
          <h2 className="container mt-4 ">Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to preview"}</p>
        </div>
      </div>
    </div>
  </div>
</>

  
  );
}
