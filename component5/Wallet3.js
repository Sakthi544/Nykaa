import React,{Component} from "react";
import './timer.css';
import { Container } from 'reactstrap';
import { Row,Col } from 'reactstrap';
import { FaArrowLeft } from "react-icons/fa";
import { IoIosWallet } from "react-icons/io";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { BiSolidOffer } from "react-icons/bi";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { BsCurrencyRupee } from "react-icons/bs";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { HiGift } from "react-icons/hi2";
import { PiNotePencilDuotone } from "react-icons/pi";
import Wallet from '../images/wall.jpg';
function App()
{
    return(
        <div  style={{background:'#eae9ec'}}>
            <Container >
          <Row>
          <Col lg='3' md='3' sm='12' xs='12'>
             <img src={Wallet} alt='wallet'height='770' width='384'/>
          </Col>
           <Col lg='7' md='7' sm='12' xs='12'  className="home-add">
           <div>
           <FaArrowLeft />
           <div className="wall-rew">Wallet & Rewards</div>
           <div className="pink-wall">Nykaa Wallet</div><hr/>
           <div className="wall-bal"><IoIosWallet className="color-ioiow"/>  Nykaa Wallet Balance</div>
          <Row className="checkout">
           <Col lg='6' md='4' sm='12' xs='12'>
              <div><HiOutlineReceiptRefund /> Instant refunds</div>
              <div><BsFillBookmarkCheckFill /> Quick checkout</div>
           </Col>
           <Col lg='6' md='4' sm='12' xs='12'>  
              <div><BiSolidOffer /> Special offers</div>
              <div><BsCurrencyRupee /> All funds in one</div>
           </Col>
          </Row>
          <Row>
          <Col lg='6' md='4' sm='12' xs='12'>
             <div><IoCheckmarkDoneSharp className="color-ioiow"/> For faster checkouts</div>
          </Col>
          <Col lg='6' md='4' sm='12' xs='12' className="top">
             <div>Top up Wallet</div>
          </Col>
          </Row><hr/>
          <Row>
          <Col lg='6' md='4' sm='12' xs='12'>
             <div><HiGift className="color-ioiow"/> Have a gift card?</div>
          </Col>
          <Col lg='6' md='4' sm='12' xs='12' className="top">
          <div>Add to Wallet</div>
          </Col>
          </Row><hr/>
          <p><PiNotePencilDuotone className="color-ioiow"/> Please note</p>
          <ul className="under-card">
             <li>Nykaa Wallet can not be used to purchase Gift Cards</li>
             <li>Nykaa Wallet credits have an expiry date, 1 year from date of credit</li>
             <li>Nykaa Wallet can not be loaded with International Cards</li>
             <li>Credit in wallet can not be transferred to a bank account</li>
             <li>To know more read our T&Cs.</li>
          </ul>
           </div>
           <center><small>PoweredBy Qwikcilver</small></center>
           </Col>
          </Row>
        </Container><br/>
        </div>
    );
}
export default App;