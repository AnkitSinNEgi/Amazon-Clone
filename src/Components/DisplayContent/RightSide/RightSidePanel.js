import React, { Component, useEffect, useState } from 'react';
import './RightSidePanel.css';
import Product from './Product';
import { List } from '@mui/material';
import Rating from '@mui/material/Rating';

function RightSidePanel (props)
{
    const [ListOfProduct,setListOfProducts] =useState([]);

    useEffect(()=>{
        //api call
        let List=[
                 {name:"Apple",rating:"4",price:"3340000",image:"https://ik.imagekit.io/amazon360/amazon-image/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1683443618159"},
                 {name:'Google',rating:'5',price:'3350000'},
                 {name:'Microsoft',rating:'4',price:'3340000'},
                 {name:'Samsung',rating:'5',price:'3340000'},
                ]
        setListOfProducts(List);
    },[]);
    return(
        <div className='rightSide_main'>  
        {  ListOfProduct.map((item)=>{
            //    <Product name={item.name}  rating={item.rating} price={item.price}/> //while sending eachparam separatly
                <Product definition={item}></Product>
        })
           }         
        </div>
    );
}
export default RightSidePanel;