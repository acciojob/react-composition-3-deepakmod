
import React,{useState,useEffect} from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";
import Style from "./Style.css";


const App = () => {

  function setVisibility(value){
      document.querySelector(".tooltiptext").style.visibility = value;
  }

  return (
    <div>
        <div className="tooltiptext">This is a tooltip</div>
        <div onMouseOver={()=>{setVisibility("visible")}} onMouseLeave={()=>{setVisibility("hidden")}} >Hover over me</div>
        <Tooltip text="This is another tooltip" children="tootip"/>
    </div>
  )
  
}

export default App
