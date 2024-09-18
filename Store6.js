import React from "react";
import './Space.css';
import { Container } from 'reactstrap';
import { Row,Col } from 'reactstrap';
import Play from '../images/gplay.png';
import Play1 from '../images/astore.png';
import { FaMobileScreen } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
function App()
{
   return(
    <div  style={{background:'#eae9ec'}}>
            <Container className="online" >
             <div >
               <p><b>Nykaa - The Online Beauty Store</b></p> 
            </div>   
            </Container> 
            <div class="fab">
                <Container fluid>
                    <Row >
                    <Col lg="4" md="3" sm="2" xs="6">
                    <IoIosMail style={{fontSize:'30px',color:'white',marginLeft:'5px'}}/>
                    <div class="spl">
                        <div class="inbox"> <input type="text" required="required"/> <span>Email</span> </div>
                    </div>
                    <div class="cart"><b>Submit </b></div>
                    </Col>
                    <Col lg="3" md="3" sm="2" xs="6">
                       <div style={{marginLeft:'5px',marginTop:'15px'}} class="mob"> <FaMobileScreen style={{marginLeft:'10px',fontSize:"25px"}} />EXPERIENCE THE NYKAA MOBILE APP</div>
                       <center><img src={Play} alt='play' className='play-app'/><br/>
                       <img src={Play1} alt='play' className='play-app'/></center>
                    </Col>
                    <Col lg="4" md="3" sm="2" xs="6">
                    <div style={{color:'white',marginTop:'15px'}}><IoCall style={{fontSize:'25px',color:'white',marginLeft:'5px',marginRight:'10px'}} />
                       FOR ANY HELP, YOU MAY CALL US AT 1800-267-4444 
                       <p>(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</p></div>
                    </Col>
                    </Row>
                </Container>
          
                <container>   
                <div class="csr">
                    <Row  >
                        <Col lg="3" md="3" sm="2" xs="6" >
                            <div style={{marginLeft:'20%',marginTop:'15%',marginBottom:'4%',fontSize:'20px'}}><b><i> NYKAA</i></b></div>
                            <div class='press'>Who are we?</div>
                            <div class='press'>Careers</div>
                            <div class='press'>Authenticity</div>
                            <div class='press'>Press</div>
                            <div class='press'>Testimonials</div>
                            <div class='press'>Nykaa CSR</div>
                            <div class='press'>Responsible Disclosure</div>
                            <div class='press'>Investor Relations</div>
                            <div class='press'>Link to Smart ODR</div>
                        </Col>
                        <Col  lg="2" md="3" sm="2" xs="6"> 
                        <div style={{marginLeft:'20%',marginTop:'23%',marginBottom:'4%'}}>HELP</div>
                            <div class='press'>Contact</div>
                            <div class='press'>Frequently asked questions</div >
                            <div class='press'>Store Locator </div>                            
                            <div class='press'>Cancellation & Return </div>
                            <div class='press'>Shipping & Delivery</div>
                            <div class='press'>Sell on Nykaa</div> 
                        </Col>
                        <Col lg="2" md="3" sm="2" xs="6"> 
                        <div style={{marginLeft:'20%',marginTop:'23%',marginBottom:'4%'}}>INSPIRE ME</div>
                            <div class='press'>Beauty Book</div>
                            <div class='press'>Nykaa Network</div>
                            <div class='press'>Buying Guides </div>                            
                        </Col>
                        <Col lg="2" md="3" sm="2" xs="6" >
                        <div style={{marginLeft:'20%',marginTop:'23%',marginBottom:'4%'}}>QUICK LINKS</div>
                            <div class='press'>Offer Zone</div>
                            <div class='press'>New Launches</div>                            
                            <div class='press'>Nykaa Man </div>
                            <div class='press'>Nykaa Fashion</div>
                            <div class='press'>Nykaa Pro</div>
                            <div class='press'>Sitemap</div>
                         </Col>
                         <Col lg="3" md="3" sm="2" xs="6" >
                        <div style={{marginLeft:'20%',marginTop:'15%',marginBottom:'4%'}}>TOP CATEGORIES</div>
                            <div class='press'>Makeup</div>
                            <div class='press'>Skin</div>                            
                            <div class='press'>Hair </div>
                            <div class='press'>Bath & Body</div>
                            <div class='press'>Appliances</div>
                            <div class='press'>Mom & baby</div>
                            <div class='press'>Health & Wellness</div>
                            <div class='press'>Fragrance</div>
                            <div class='press'>Natural</div>
                            <div class='press'>Luxe</div>
                         </Col>
                    </Row>
                </div>
                </container>
            </div>
        
            <div style={{backgroundColor:'black'}}> 
               <container>
                <center><div class='media'>Show us some love ❤ on social media</div>
               <div class='mail' style={{display:'inline-block'}}><a href="#"><FaSquareInstagram  /></a></div>
               <div class='mail' style={{display:'inline-block'}}><a href="#"><FaFacebook /></a></div>
               <div class='mail' style={{display:'inline-block'}}><a href="#"><FaYoutube /></a></div>
               <div class='mail' style={{display:'inline-block'}}><a href="#"><FaTwitter /></a></div>
               <div class='mail' style={{display:'inline-block'}}><a href="#"><FaPinterest /></a></div></center>
               </container>
            </div>
    </div>
   );
}
export default App;