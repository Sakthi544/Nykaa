import React from "react";
import './Space.css';
import { Container } from 'reactstrap';
import C from '../images/colos.jpg';
import F from '../images/fit.jpg';
import Z from '../images/age.jpg';
import N from '../images/dark.jpg';
function App()
{
   return(
    <div  style={{background:'#eae9ec'}}>
                <h1 style={{marginLeft:"60px"}}><b>BEST SELLERS</b></h1>
            <Container fluid>
            <div class="colo">    
                <img src={C} width="220" height="246" alt="Colo" />
                <center><h6>The colossal <br/>waterproof mascara</h6>
                <small style={{color:"gray"}}>1 SHADE</small></center>
                <center><code>Rs.335</code></center>
                <center><div class="solo"> Buy Now</div></center>
            </div> 

            <div class="colo">    
                <img src={F} width="220" height="246" alt="Colo" />
                <center><h6>Fit me matte+<br/>poreless liquid fondation</h6>
                <small style={{color:"gray"}}>18 SHADE</small></center>
                <center><code>Rs.647</code></center>
                <center><div class="solo"> Buy Now</div></center>
            </div> 

            <div class="colo">    
                <img src={Z} width="220" height="246" alt="Colo" />
                <center><h6>Instant age <br/>rewind concealer</h6>
                <small style={{color:"gray"}}>9 SHADE</small></center>
                <center><code>Rs.729</code></center>
                <center><div class="solo"> Buy Now</div></center>
            </div>

            <div class="colo">    
                <img src={N} width="220" height="246" alt="Colo" />
                <center><h6>Superstay matte <br/>ink liquid lipstick</h6>
                <small style={{color:"gray"}}>30 SHADE</small></center>
                <center><code>Rs.699</code></center>
                <center><div class="solo"> Buy Now</div></center>
            </div> <br/>
            </Container><br/>
    </div>
   );
}
export default App;