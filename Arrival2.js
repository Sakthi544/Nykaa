import React from "react";
import './Space.css';
import { useNavigate } from 'react-router-dom';
import Log from '../component3/login';
import { Container } from 'reactstrap';
import L from '../images/real.jpg';
import M from '../images/mama.jpg';
import P from '../images/ponds.jpg';
import S from '../images/simple.jpg';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
function App()
{
  const navigate =useNavigate();

   return(
    <div  style={{background:'#eae9ec'}}>
            <h3><center>NEW ARRIVALS</center></h3><br/>
            < Container fluid>
           
            <div class="black"  style={{ width: '18rem',cursor:'pointer' }}>
            <center><img alt="oreal" src={L} width="200" height="200"/></center>
            <h6>L'Oreal</h6>
            <code>[Hyaluron Moisture]</code>
            <p>L'Oreal Paris Hyaluron Moisture Shampoo With Hyaluronic Acid</p>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /><p>4.4/5</p><small>26587 ratings  &  1497reviews</small>
            <h6>MRP:₹743</h6> <p style={{color:"green"}}>37% Off</p>
            <center><div class="large"  onClick={()=>navigate('/login')}> Buy Now</div></center>
            </div>
           
            <div class="think"  style={{ width: '18rem',cursor:'pointer' }}>
            <center><img alt="mamaearth" src={M} width="200" height="200"/></center>  
            <h6>Mamaearth</h6>
            <code>[ Hydraful Moisture]</code>
            <p>Mamaearth Beetroot Hydraful Moisturizer</p>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /><p>4.6/5</p><small>26587 ratings & 497reviews</small>
            <h6>MRP:₹315</h6> <p style={{color:"green"}}>10% Off</p>
            <center><div class="large"> Buy Now</div></center>
            </div>

            <div class="think"  style={{ width: '18rem',cursor:'pointer' }}>
            <center><img alt="ponds" src={P} width="200" height="200"/></center>  
            <h6>Ponds</h6>
            <code>[ Super Light Moisture]</code>
            <p>Ponds Super Light Gel Oil Free Moisturiser</p>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p>5/5</p><small>174079 ratings & 164067reviews</small>
            <h6>MRP:₹333</h6> <p style={{color:"green"}}>30% Off</p>
            <center><div class="large"> Buy Now</div></center>
            </div>
            
            <div class="think"  style={{ width: '18rem',cursor:'pointer' }}>
            <center><img alt="Simple" src={S} width="200" height="200"/></center>  
            <h6>Simple</h6>
            <code>[ Light Moisturiser]</code>
            <p>Simple Kind To Skin Hydrating Light Moisturiser</p>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /><p>4.8/5</p><small>21626 ratings & 16406 reviews</small>
            <h6>MRP:₹395</h6> <p style={{color:"green"}}>15% Off</p>
            <center><div class="large"> Buy Now</div></center>
            </div><hr/>
            </Container><br/>
    </div>
   );
}
export default App;