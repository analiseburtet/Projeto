import React from "react";
import "./Overlay.css";
const overlay = props =>(
    <div className="overlay" onClick={props.click}/>   
);

export default overlay;