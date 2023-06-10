import React, { Component } from 'react';
import "./AdvertisementFour.css";

function AdvertisementFour(props )
{
    return(
     <div className='AdvertisementFour_main'>
            <div className='AdvertisementFour_header'>
            <b>Upto 70% off | Electronic clearance store</b>
            </div>
            <div className='AdvertisementFour_body' >
            <img src='https://ik.imagekit.io/amazon360/amazon-image/amazon-image/tab8.jpg?updatedAt=1683443612814' className='adfour_Image'></img>
            <img src='https://ik.imagekit.io/amazon360/amazon-image/amazon-image/tab8.jpg?updatedAt=1683443612814' className='adfour_Image'></img>
            <img src='https://ik.imagekit.io/amazon360/amazon-image/amazon-image/tab8.jpg?updatedAt=1683443612814' className='adfour_Image'></img>
            <img src='https://ik.imagekit.io/amazon360/amazon-image/amazon-image/tab8.jpg?updatedAt=1683443612814' className='adfour_Image'></img>

            </div>
            <div className='AdvertisementFour_footer'>
                 <a href='www.google.com'><b>See more</b></a>
            </div>
        </div>
    );
}
export default AdvertisementFour;