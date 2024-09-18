import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Log from '../component3/login';
import { Row,Col } from 'reactstrap';
import { Container } from 'reactstrap';
import Pro1 from '../images/pro1.png';
import Pros2 from '../images/pros2.jpg';
import Pro3 from '../images/pro3.png';
import Pro4 from '../images/pro4.png';
import Pro5 from '../images/pro5.png';
import Pro6 from '../images/pro6.png';
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import './brand.css';
function App()
{
    const navigate =useNavigate();
    return(
        <div style={{background:'#eae9ec'}}>
               
    <h3  className='collection-name'>NYKAA COSMETICS</h3>
     <Container>
          <Row>
              <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <img src={Pro1} alt='pro1'  style={{width:'210px'}} className='product-logo'></img>
                  <div style={{marginBottom:'5px'}}>Janhvi's Must Have So Creme! Creamy Matte</div>
                  <div>MRP:₹<b>329</b><div className='color-green'>50% Off</div></div> 
                  <div className='must'>Get Free Product</div>
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarOutline /></div>
                  <button onClick={()=>navigate('/login')} className='bag-button' >Add to Bag</button >   
                </Col>

              <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <center><img src={Pros2} alt='pro1' style={{width:'190px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>Nykaa Black Magic Kajal Eyeliner Pencil - Black</div>
                  <div>MRP:₹<b>132</b><div className='color-green'>30% Off</div></div> 
                  <div className='must'>Get Free Product</div>
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarOutline /></div>
                  <button className='bag-button'>Add to Bag</button>    
              </Col>

              <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <center><img src={Pro3} alt='pro1' style={{width:'190px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>Nykaa Black Magic Waterproof & Smudgeproof Mascara</div>
                  <div>MRP:₹<b>368</b><div className='color-green'>30% Off</div></div> 
                  <div className='must'>Get Free Product</div>
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarOutline /></div>
                  <button className='bag-button'>Add to Bag</button>    
              </Col>
          </Row>
     </Container>
     <Container>
        <Row>
        <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <center><img src={Pro4} alt='pro1' style={{width:'190px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>Nykaa Cosmetics All Day Matte Long Wear Liquid Foundation</div>
                  <div>MRP:₹<b>132</b><div className='color-green'>28% Off</div></div> 
                  <div className='must'>Get Free Product</div>
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarOutline /><IoIosStarOutline /></div>
                  <button className='bag-button'>Add to Bag</button>    
        </Col>

        <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <center><img src={Pro5} alt='pro1' style={{width:'190px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>Nykaa Cosmetics Eyes On Me! 4 In 1 Quad Eyeshadow Palette</div>
                  <div>MRP:₹<b>244</b><div className='color-green'>35% Off</div></div> 
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
                  <button className='bag-button'>Add to Bag</button>    
        </Col>

        <Col  lg="3" className='product-theme'>
                  <p className='must'>FEATURED</p>
                  <center><img src={Pro6} alt='pro1' style={{width:'190px'}}></img></center>
                  <div style={{marginBottom:'5px'}}>Nykaa Cosmetics Breathable Nail Enamel</div>
                  <div>MRP:₹<b>137</b><div className='color-green'>40% Off</div></div> 
                  <div className='spl-rates'>Ratings:<IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarOutline /></div>
                  <button className='bag-button'>Add to Bag</button>    
        </Col>
        </Row>
     </Container>
        </div>
    );
}
export default App;