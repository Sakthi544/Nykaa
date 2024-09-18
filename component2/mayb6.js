import React, { useState } from 'react';
import './brand.css';
import { Row,Col } from 'reactstrap';
import { Container } from 'reactstrap';
import May1 from '../images/may1.png';
import May2 from '../images/may2.png';
import May3 from '../images/may3.png';
import May4 from '../images/may4.png';
import May5 from '../images/may5.png';
import May6 from '../images/may6.png';
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
function App()
{
    return(
        <div style={{background:'#eae9ec'}}>
                 <h3  className='collection-name'>MAYBELLINE NEWYORK</h3>
     <Container>
          <Row>
              <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <img src={May1} alt='pro1'  style={{width:'210px'}} className='product-logo'></img>
                  <div style={{marginBottom:'5px'}}>Maybelline New York Fit Me 12Hr Oil Control Compact</div>
                  <div>MRP:₹<b>202</b><div className='color-green'>24% Off</div></div> 
                  <div className='must'>Enjoy Free Gift</div>
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarOutline /></div>
                  <button className='bag-button'>Add to Bag</button>
              </Col>

              <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <center><img src={May2} alt='pro1' style={{width:'210px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>Maybelline New York Color Sensational Ultimattes Lipstick</div>
                  <div>MRP:₹<b>359</b><div className='color-green'>40% Off</div></div> 
                  <div className='must'>Enjoy Free Gift</div>
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarOutline /></div>
                  <button className='bag-button'>Add to Bag</button>    
              </Col>

              <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <center><img src={May3} alt='pro1' style={{width:'220px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>Maybelline New York Fit Me Matte+Poreless Liquid</div>
                  <div>MRP:₹<b>227</b><div className='color-green'>31% Off</div></div> 
                  <div className='must'>Enjoy Free Gift</div>
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarOutline /></div>
                  <button className='bag-button'>Add to Bag</button>    
              </Col>
          </Row>
     </Container>
     <Container>
        <Row>
        <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <center><img src={May4} alt='pro1' style={{width:'190px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>Maybelline New York Super Stay Matte Ink Liquid Lipstick</div>
                  <div>MRP:₹<b>419</b><div className='color-green'>40% Off</div></div> 
                  <div className='must'>Enjoy Free Gift</div>
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarOutline /><IoIosStarOutline /></div>
                  <button className='bag-button'>Add to Bag</button>    
        </Col>

        <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <center><img src={May5} alt='pro1' style={{width:'190px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>Maybelline New York Fit Me Matte + Poreless Powder</div>
                  <div>MRP:₹<b>421</b><div className='color-green'>32% Off</div></div> 
                  <div className='must'>Enjoy Free Gift</div>
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
                  <button className='bag-button'>Add to Bag</button>    
        </Col>

        <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <center><img src={May6} alt='pro1' style={{width:'190px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>Maybelline New York The Colossal Combo - Mascara +</div>
                  <div>MRP:₹<b>748</b><div className='color-green'>25% Off</div></div> 
                  <div className='must'>Enjoy Free Gift</div>
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarOutline /></div>
                  <button className='bag-button'>Add to Bag</button>    
        </Col>
        </Row>
     </Container>
        </div>
    );
}
export default App;