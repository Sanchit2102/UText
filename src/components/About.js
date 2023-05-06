import "./index.css"

import React from "react";

export default function About(props) {
 
  let myStyle ={
    color:props.mode==="dark"? "white":"black",
    backgroundColor: props.mode === "dark"? "rgb(36 101 154)":"white" ,
  border :"1px solid",
borderColor:  props.mode==="dark"? "white":"black"}

 


  return (<>
    <div className="container px-0" style={ {color:props.mode==="dark"? "white":"black"}}>
     <h1 className="my-4">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item mx-sm-3 ">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            ><strong>  Analyze your text</strong>
        
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong> This section of the website allows you</strong> to input your text and analyze it using different functions such as uppercase, lowercase, and removing extra spaces. This section is designed to help you better understand and manipulate your text.
              and provides you with useful information such as the number of characters, words, and sentences present in your text.
            </div>
          </div>
        </div>
        <div className="accordion-item mx-sm-3 ">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            ><strong> Free to use</strong>
          
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This section highlights</strong> that the text converter website is completely free to use. Users can access all the functions and features of the website without having to pay any fees or subscription charges.
              you can access all the features and tools without any restrictions or hidden costs.
            </div>
          </div>
        </div>
        <div className="accordion-item mx-sm-3 ">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This website is compatible</strong> and works on all major web browsers, including Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, and others. You can access it on any device and operating system that supports these browsers, making it easy to use and access from anywhere. Additionally, the website is optimized for different screen sizes and resolutions, so you can use it on desktops, laptops, tablets, and smartphones with ease.
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
