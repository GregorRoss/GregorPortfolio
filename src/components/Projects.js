import React from 'react';
import './projects.css'

const Projects = () => {
    return ( 

        <>
        <h4>
            Projects Page where I list my projects and eperiments with apps and api 
        </h4>

        <div className= 'projects-main'>
        <ul>
            <li>

                <h5>Solo Project:  -  Ice Hockey Tracker</h5>
                <p> I created a web application that could help a user keep track of their favourite ice hockey team. Using CRUD, they could add / update team and game information. When accessing their chosen team, it would also show the games that they were involved in. the application also stored the logo information for the teams and tracked the number of goals so a table could be shown with the winning team at the top of the table.</p>
                <a href="https://github.com/GregorRoss" rel="noopener" target="_blank"><i class="fa-brands fa-github"></i>GitHub link to be updated</a>
                <a href="https://github.com/GregorRoss" rel="noopener" target="_blank"><i class="fa-brands fa-youtube"></i>link to be updated</a>
                <h6>tools used: </h6>
            </li>
            <li>

                <h5>D & D API:  -  JavaScript React</h5>
                <p> I created a React app that would pull information from the open DND api for Dungeons & Dragons. Allowing users to select a race to view information. After the user selected the race, they wanted to know more about the application would then query the DND api for information regarding that race and display the information for the user to read. I also added the monster selector also. The plan for this is to make it quicker to access the stats for confirmation when playing D&D.</p>
                <a href="https://github.com/GregorRoss" rel="noopener" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="https://github.com/GregorRoss" rel="noopener" target="_blank"><i class="fa-brands fa-youtube"></i>link to be updated</a>
                <h6>tools used: </h6>
            </li>
            <li>

                <h5>Reddit API:  -  coming soon</h5>   
                <p> ...</p>
                <a href="https://github.com/GregorRoss" rel="noopener" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="https://github.com/GregorRoss" rel="noopener" target="_blank"><i class="fa-brands fa-youtube"></i>link to be updated</a>
                <h6>tools used: </h6>
            </li>
            <li>

                <h5>Group Project:  -  coming soon</h5>      
                <p> Reporting to the operations Director of Allsop Residential Investment Management; responsible for IT development and operation. Projects included re-branding; Integrating applications between two organisations; modifying processes to meet new business requirements.</p>
                <a href="https://github.com/GregorRoss" rel="noopener" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="https://github.com/GregorRoss" rel="noopener" target="_blank"><i class="fa-brands fa-youtube"></i>link to be updated</a>
                <h6>tools used: </h6>
            </li>
            <li>

                <h5>Capstone Project:  -  coming soon</h5>      
                <p> ...</p>
                <a href="https://github.com/GregorRoss" rel="noopener" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="https://github.com/GregorRoss" rel="noopener" target="_blank"><i class="fa-brands fa-youtube"></i>link to be updated</a>
                <h6>tools used: </h6>
            </li>
        </ul>
        </div>
        </>
     );
}
 
export default Projects;