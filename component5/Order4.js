import React from "react";
import './timer.css';
import { Container } from 'reactstrap';
import { Row,Col } from 'reactstrap';
import { FaArrowLeft } from "react-icons/fa";
import Order from '../images/order.jpg';
function App()
{
   return(
    <div style={{background:'#eae9ec'}}>
          <Container>
          <Row>
          <Col lg='3' md='3' sm='12' xs='12'>
              <img src={Order} alt="order" width='380' height='412'/>
          </Col>
           <Col lg='7' md='7' sm='12' xs='12'  className="home-add">
           <div > <FaArrowLeft />
           <div className="wall-rew">My Orders</div>
           </div><hr/>
      
           <div className="or-num">Order Number</div>
           <div className="or-nyk">NYK-190717986</div><br/>
           <div className="or-num">1 item(s) Delivered</div>
           <div className="or-nyk">Package delivery on <b>Mon,5 feb</b></div>
           <button className="button-style">Order Details</button><br/>
           <button className="button-exper">Rate Your Experience</button>
           </Col>
           
         </Row>
         </Container><br/>
    </div>
   );
}
export default App;