import React, { Component } from 'react';
import "./DisplayContent.css"
import LeftSidePanel from './LeftSide/LeftSidePanel';
import RightSidePanel from './RightSide/RightSidePanel';

 function DisplayContent (props)
{
   return(
    <div  style={{display:'flex'}}>
        <div>
            <LeftSidePanel/>
        </div>
        <div>
            <RightSidePanel/>
        </div>

    </div>
   );
}
export default DisplayContent;
