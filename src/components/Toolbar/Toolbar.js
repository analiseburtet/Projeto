import React from "react";
import "./Toolbar.css";
import me from '../../me.jpg'

import {Link} from 'react-router-dom';

const toolbar = props =>(
    <nav className="toolbar__navigation">
        <ul>
            <li className="toolbar__navigation-lis"><Link to="/">
            <img src={me}/></Link></li>
            <li className="toolbar__navigation-lis name"><Link to="/">Analise Burtet</Link></li>
            <li className="toolbar__navigation-lis job-title"><Link to="/">Frontend Developer</Link></li>
            <li className="toolbar__navigation-lis"><Link to="/contato">Let's talk :)</Link></li>
            <li className="toolbar__navigation-lis">
                <a target="_blank"  href="https://www.linkedin.com/in/analise-burtet-a8040ba1/">
                   Me acompanhe pelo Linkedin
                </a>  
            </li>
            <li className="toolbar__navigation-lis">
                <a target="_blank" href="https://github.com/analiseburtet">
                Me acompanhe pelo GitHub
                </a>
            </li>
        </ul>
    </nav>
)

export default toolbar;