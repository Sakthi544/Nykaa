import React, { useState } from 'react';
import './brand.css';
import { Row,Col } from 'reactstrap';
import { Container } from 'reactstrap';
import Real1 from '../images/real1.png';
import Real2 from '../images/real2.png';
import Real3 from '../images/real3.png';
import Real4 from '../images/real4.png';
import Real5 from '../images/real5.png';
import Real6 from '../images/real6.png';
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
function App()
{
    return(
        <div style={{background:'#eae9ec'}}>
                 <h3  className='collection-name'>L'OREAL Paris</h3>
     <Container>
          <Row>
              <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <img src={Real1} alt='pro1'  style={{width:'210px'}} className='product-logo'></img>
                  <div style={{marginBottom:'5px'}}>L'Oreal Paris Voluminous Panorama Waterproof Mascara</div>
                  <div>MRP:₹<b>899</b><div className='color-green'>10% Off</div></div> 
                  <div className='must'>Enjoy Free Gift</div>
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarOutline /></div>
                  <button className='bag-button'>Add to Bag</button>
              </Col>

              <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <center><img src={Real2} alt='pro1' style={{width:'210px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>L'Oreal Paris Infallible 24H Fresh Wear Foundation</div>
                  <div>MRP:₹<b>1044</b><div className='color-green'>10% Off</div></div> 
                  <div className='must'>Enjoy Free Gift</div>
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarOutline /></div>
                  <button className='bag-button'>Add to Bag</button>    
              </Col>

              <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <center><img src={Real3} alt='pro1' style={{width:'220px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>L'Oreal Paris Glycolic Bright Dark Circle Eye Serum With 3%</div>
                  <div>MRP:₹<b>594</b><div className='color-green'>15% Off</div></div> 
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
                  <center><img src={Real4} alt='pro1' style={{width:'190px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>L'Oreal Paris Revitalift Hydrating Serum With 1.5 % Hyaluron..</div>
                  <div>MRP:₹<b>699</b><div className='color-green'>30% Off</div></div> 
                  <div className='must'>Enjoy Free Gift</div>
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarOutline /><IoIosStarOutline /></div>
                  <button className='bag-button'>Add to Bag</button>    
        </Col>

        <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <center><img src={Real5} alt='pro1' style={{width:'190px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>L'Oréal Paris Infallible Matte Resistance Liquid Lipstick</div>
                  <div>MRP:₹<b>769</b><div className='color-green'>23% Off</div></div> 
                  <div className='must'>Enjoy Free Gift</div>
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
                  <button className='bag-button'>Add to Bag</button>    
        </Col>

        <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <center><img src={Real6} alt='pro1' style={{width:'190px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>L'Oreal Paris Hyaluronic Acid Line Filling Water Cream with ...</div>
                  <div>MRP:₹<b>424</b><div className='color-green'>20% Off</div></div> 
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