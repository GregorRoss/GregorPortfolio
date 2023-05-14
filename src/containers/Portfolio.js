import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from '../components/Header';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Toolbox from '../components/Toolbox';
import Interests from '../components/Interests';
import Home from '../components/Home';
import toolsInfo from '../data/Tools';


const Portfolio = () => {
    const [tools, setTools] = useState(toolsInfo);


    return ( 
        <div className='title-container'>
        <div className='app-header'>
        <img id="logo" src={require("../images/programmer3.png")} alt="programmer sitting at a desk" />
        <h3>Gregor Ross</h3>
        <a href="https://github.com/GregorRoss" rel="noopener" target="_blank">
        <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.facebook.com/gregor.ross.12" rel="noopener" target="_blank">
        <i Class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/in/gregor-ross" rel="noopener" target="_blank">
        <i Class="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:gregor.home@btinternet.com" rel="noopener" target="_blank">
        <i Class="fa-regular fa-envelope"></i>
        </a>
        </div>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/experience" element={ <Experience />} />
                <Route path="/projects" element={ <Projects />} />
                <Route path="/toolbox" element={ <Toolbox tools={tools} />} />
                <Route path="/interests" element={ <Interests />} />
            </Routes>
        </Router>
        </div>

     );
}
 
export default Portfolio;