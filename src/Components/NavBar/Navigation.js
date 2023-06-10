import React, { Component } from 'react';
import "./NavBar.css";
class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
         <div>
            <div className='navbar_component'>
                
              <div className='navbar_logo'></div>  
              <div className='navbar_locator'>
                 <div className='navbar_locatorImage'></div>
                 <div className='navbar_location'>Banglore</div>
              </div>


         <div className='navbar_searchcomponent'>
                 <div>     
                    <select className='nav_dropdown'>
                       <option value='All'>All</option>
                       <option value="Jwellery">Jwellery</option>
                       <option value="Electronics">Electronics</option>
                       <option value="Clothes">Electronics</option>
                       <option value="Furniture">Furniture</option>
                       <option value="Mobile">Mobile</option>
                       <option value="Sports">Sports</option>
                       <option value="Kitchen">Kitchen</option>  
                    </select>             
                 </div>
                 <div>
                    <input type='text' className='navbar_searchbox'/>
                 </div>
                 <div className='navbar_searchicon'></div>


            
              <div className='navbar_text navbar_signin'>
                     <div >Hello,SignIn</div>
                     <div style={{fontWeight:'bold'}}>Account</div>
              </div>
              <div className='navbar_text navbar_returns'>
                     <div>Return</div>
                     <div  style={{fontWeight:'bold'}}>&Order</div>
              </div>
              <div className='navbar_text navbar_cart'>
                    <div src="" className='cart_image'></div>
                    <div className='cart_item'>0</div>
                    <div className='navbar_text_cart'>Cart</div>
              </div>    
                  
            </div>     
             </div>
            <div className='navbar_footer'>
                <div className='navbar_footer_text'>Best Seller</div>
                <div className='navbar_footer_text'>Mobile</div>
                <div className='navbar_footer_text'>Amazon Pay</div>
                <div className='navbar_footer_text'>Fashion</div>
                <div className='navbar_footer_text'>Electronics</div>
                <div className='navbar_footer_text'>Prime</div>
                <div className='navbar_footer_text'>New Release</div>
                <div className='navbar_footer_text'>Customer Service</div>
                <div className='navbar_footer_text'>Computers</div>
                <div className='navbar_footer_text'>Home & Kitchen</div>
                
            </div>

          </div>

          );
    }
}
 
export default Navbar;