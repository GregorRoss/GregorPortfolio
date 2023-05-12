import React from 'react';
import Tool from './Tool';

const Toolbox = ({tools}) => {
    const toolComponents = tools.map(tool => (
        <Tool key={tool.id} tool={tool}/> 
    ));



    return ( 

        <>
        <h4>
            These are all the tools that I have been using to create and experiment with
        </h4>
        <div className='tool-container'>
            {toolComponents}
        </div>
        </>
     );
}
 
export default Toolbox;
