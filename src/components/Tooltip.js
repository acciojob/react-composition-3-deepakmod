import React from 'react';

function Tooltip({text,children}){

    function setVisibility(value){
        document.querySelector(".tootip").style.visibility = value;
    }

    return <div>
        <div className="tootip">{text}</div>
        <div onMouseOver={()=>{setVisibility("visible")}} onMouseLeave={()=>{setVisibility("hidden")}} >Hover over me to see another tooltip</div>
    </div>
}

export default Tooltip;