import React from "react";
import Button from "../MiniMenu/Button";
import "./Toolbar.css";
const toolbar = props =>(
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div>
                <Button/>
            </div>
            <div className="toolbar__logo"><a href="#">Analise Burtet</a></div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="#about">Sobre mim</a></li>
                    <li><a href="#portifolio">Portifólio</a></li>
                    <li><a href="#form">Fale comigo</a></li>
                    <li><a target="_blank" href="https://github.com/analiseburtet">GitHub</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;