import React, { Component } from 'react';
import './RightSidePanel.css';
import './RightSidePanel';
import Rating from '@mui/material/Rating';


const Product = (props) =>
{
    console.log(props);
    return(
        <div className='product'>         
           <div className="product_image">
                 <img src={props.image} style={{height:'300px',width:'200px'}} ></img>               
            </div> 
            <div className='product_name'>
                {props.definition.name}
            </div>
            <div className='product_rating'>
            <Rating name="read-only" value="4" readOnly />  
                {(props.definition.rating)}
            </div>
            <div className='product_price'>
                {props.definition.price}
            </div>   
        </div>
    );
}
export default Product;