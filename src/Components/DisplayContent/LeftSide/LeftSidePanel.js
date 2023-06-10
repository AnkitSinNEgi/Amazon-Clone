import React, { Component } from 'react';
import './LeftSidePanel.css';

function LeftSidePanel (props)
{
    return(
        <div className='leftSide_main'>
            
            <div className='leftSide_header'>
               <h2>Brand Name</h2>
            </div>

            <div className='leftSide_brandName'>
            <label className='brandName'>
                <input type='checkbox' value="Apple"/><b>Apple</b>
            </label>
            <label className='brandName'>
                <input type='checkbox' value="Samsung"/><b>Samsung</b>
            </label>
            <label className='brandName'>
                <input type='checkbox' value="Google"/><b>Google</b>
            </label>
            <label className='brandName'>
                <input type='checkbox' value="Microsoft"/><b>Microsoft</b>
            </label>
            </div>
        </div>
    );
}
export default LeftSidePanel;