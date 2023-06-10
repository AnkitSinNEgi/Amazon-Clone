import React, { Component } from 'react';
import "./AdvertisementOne.css";
function AdvertisementOne(props ){
 return(
    <div className='AdvertisementOne_main'>
       <div className='AdvertisementOne_header'>
       <b>  Upto 70% off | Electronic clearance store</b>
       </div>
       <div className='AdvertisementOne_body'>
        <img src='https://ik.imagekit.io/amazon360/amazon-image/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1683443612855'></img>
       </div>
       <div className='AdvertisementOne_footer'>
        <a href='www.google.com'><b>See more</b></a>
       </div>
    </div>
 );   
}
export default AdvertisementOne; 