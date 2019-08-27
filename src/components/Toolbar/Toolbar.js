import React from "react";
import Button from "../MiniMenu/Button";
import "./Toolbar.css";
import {Link, Route} from 'react-router-dom';

const toolbar = props =>(
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div style={{display: "none"}}>
                <Button/>
            </div>
            <div className="toolbar__logo"><a href="/">Analise Burtet</a></div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><Link to="/contato">Contato</Link></li>
                    <li><a target="_blank" href="https://github.com/analiseburtet">GitHub</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;