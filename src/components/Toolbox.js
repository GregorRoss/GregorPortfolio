import React from 'react';
import Tool from './Tool';
import './toolbox.css'

const Toolbox = ({tools}) => {
    const toolComponents = tools.map(tool => (
        <Tool key={tool.id} tool={tool}/> 
    ));



    return ( 

        <>
        <h4>
            These are all the tools that I have been using to create and experiment with
        </h4>

        <p>
        The time with CodeClan has been an intense but amazing learning curve to delve deeper into software than I have ever achieved before.  When I first came across HTML in the 90’s we were using html tables to format everything. Flex and Grid are awesome tools for dynamically modifying your pages.  Python and Progressql for my first project along with JavaScript React which has opened my eyes to the accessibility for progressive web applications, the potential for the access and use of information is amazing.
        </p>

        <p>
       
        My long experience within IT I have extensive skills in Microsoft SQL server along with SSIS and SSRS this is what introduced me to web reports and information that was accessible through a browser. This led into Power Bi along with SharePoint and PowerApps creating applications that helped the organisation achieve some of its potential. 
        </p>
        <p>
        I have manged teams, project and budgets chaired operations meetings and managed budgets of just under £3million.
        </p>

        <div className='tool-container'>
            {toolComponents}
        </div>
        </>
     );
}
 
export default Toolbox;
