import { useState } from "react";
import "./App.css";  

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  { toast, Toaster } from 'react-hot-toast';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = (cls) => {
    
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      toast.success("Dark mode is enabled");
      document.title = "UText Dark Mode";
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      toast.success("Light mode is enabled");
      document.title = "UText Light Mode";
    }
  };
  
  return (
   <>
      <BrowserRouter>
    <Navbar
      title="UText"
      mode={mode}
      aboutText="About us"
      toggleMode={toggleMode}
    />
 <Toaster autoClose ={1000}/>
    <div className="container my-3">
      <Routes>
        <Route
          exact
          path="/"
          element={<TextForm heading=" Making Text Editing Effortless with UText" mode={mode} />}
        />
        <Route exact path="/about" element={<About 
          mode={mode}
        />} />
      </Routes>
    </div>
  </BrowserRouter>


</>)}


  

export default App;


