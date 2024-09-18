import React from "react";
import './Space.css';
import { Container } from 'reactstrap';
import A from '../images/ai.png';
import Fou from '../images/fou.png';
import Fin from '../images/fin.png';
import Sett from '../images/setting.png';
import Face from '../images/face.png';
function App()
{
   return(
    <div  style={{background:'#eae9ec'}}>
                    <h2 style={{marginLeft:"30px"}}>Brand in Focus</h2>
           <Container fluid>
              <img src={A} alt='Ai'/><br/>
            </Container>
            <div class="container">
            <div class="box">
               <img src={Fou}  alt='foundation'/>
               <h4>Foundation</h4>
            </div>
            <div class="box">
               <img src={Fin} alt='fin'/>
               <h4>Finish Powder</h4>
            </div>
            <div class="box">
                <img src={Sett} alt='setting'/>
                <h4>Setting Spray</h4>
            </div>
            <div class="box">
                <img src={Face} alt='face'/>
                <h4>Face Kits</h4>
            </div> 
            </div>
            <div class="nykaa-careful">
                <p>Please be careful of fraudulent calls & SMSes! Nykaa will never call you with offers pertaining to free gifts or prizes or ask for payments through links.</p>
            </div><br/>
    </div>
   );
}
export default App;