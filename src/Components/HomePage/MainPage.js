import React, { Component } from 'react';
import "./MainPage.css";
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import AdvertisementFour from './AdvertisementFour/AdvertisementFour';
class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="mainPage"  style={{display:'flex', flexWrap:"wrap"}}>
              
                <AdvertisementOne/>
                <AdvertisementFour/>
                <AdvertisementOne/>
                <AdvertisementOne/>
                <AdvertisementOne/>
                <AdvertisementOne/>
                <AdvertisementOne/>
                <AdvertisementFour/>

            </div>
         );
    }
}
 
export default MainPage;