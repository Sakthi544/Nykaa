import React from "react";
import H from '../images/best.png';
import './Space.css';
function App()
{
   return(

        <div class="nice" >
           
           <p style={{color:"purple",textAlign:"center"}}>We are now shipping to your country! You can navigate to your local site</p>
           <p style={{backgroundColor:"pink",color:"white",textAlign:"center"}}>Free Sample On Every Order</p>
           <div>
           <img src={H} alt="best" width="1300" height="507"/><br/>
           </div><br/>
           <marquee className="grade">SALE IS LIVE! FREE SHIPPING ON ALL ORDERS ABOVE ₹299.</marquee>

    </div>
   );
}
export default App;