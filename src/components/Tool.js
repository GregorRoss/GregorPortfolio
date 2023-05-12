import React from 'react';

const Tool = ({tool}) => {

console.log(tool.image);

    return ( 
        <div className='item'>
        <img src={require("../images/" + tool.image)} alt="logo of tool description" />
        <p>{tool.desc}</p>
        </div>
     );
}
 
export default Tool;