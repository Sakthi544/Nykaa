import React, { useState } from 'react';
import './brand.css';
import { Row,Col } from 'reactstrap';
import { Container } from 'reactstrap';
import Kay1 from '../images/kay1.png';
import Kay2 from '../images/kay2.png';
import Kay3 from '../images/kay3.png';
import Kay4 from '../images/kay4.png';
import Kay5 from '../images/kay5.png';
import Kay6 from '../images/kay6.png';
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
function App()
{
    return(
        <div style={{background:'#eae9ec'}}> 
               <h3  className='collection-name'>KAY BEAUTY</h3>
     <Container>
          <Row>
              <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <img src={Kay1} alt='pro1'  style={{width:'210px'}} className='product-logo'></img>
                  <div style={{marginBottom:'5px'}}>Kay Beauty Katrina's Ultimate Duo</div>
                  <div>MRP:₹<b>918</b><div className='color-green'>20% Off</div></div> 
                  <div className='must'>Enjoy Free Gift</div>
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarOutline /></div>
                  <button className='bag-button'>Add to Bag</button>
              </Col>

              <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <center><img src={Kay2} alt='pro1' style={{width:'210px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>Kay Beauty Hydra Crème Hydrating Full Coverage Lipstick</div>
                  <div>MRP:₹<b>999</b><div className='color-green'>30% Off</div></div> 
                  <div className='must'>Enjoy Free Gift</div>
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarOutline /></div>
                  <button className='bag-button'>Add to Bag</button>    
              </Col>

              <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <center><img src={Kay3} alt='pro1' style={{width:'220px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>Kay Beauty Lip Tint</div>
                  <div>MRP:₹<b>719</b><div className='color-green'>25% Off</div></div> 
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
                  <center><img src={Kay4} alt='pro1' style={{width:'190px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>Kay Beauty Multi Texture Eyeshadow Palette</div>
                  <div>MRP:₹<b>1619</b><div className='color-green'>10% Off</div></div> 
                  <div className='must'>Enjoy Free Gift</div>
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarOutline /><IoIosStarOutline /></div>
                  <button className='bag-button'>Add to Bag</button>    
        </Col>

        <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <center><img src={Kay5} alt='pro1' style={{width:'190px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>Nykaa Cosmetics Eyes On Me! 4 In 1 Quad Eyeshadow Palette</div>
                  <div>MRP:₹<b>244</b><div className='color-green'>35% Off</div></div> 
                  <div className='must'>Enjoy Free Gift</div>
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
                  <button className='bag-button'>Add to Bag</button>    
        </Col>

        <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <center><img src={Kay6} alt='pro1' style={{width:'190px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>Kay Beauty Matte Blush</div>
                  <div>MRP:₹<b>692</b><div className='color-green'>23% Off</div></div> 
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