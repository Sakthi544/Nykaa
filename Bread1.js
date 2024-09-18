import React, {Component} from "react";
import { Container } from 'reactstrap';
import { Row,Col } from 'reactstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { CgProfile } from "react-icons/cg";
import { IoWalletOutline } from "react-icons/io5";
import { BsTruckFront } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";
import { IoCardOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import Profile from '../images/profile.png';
import { MdOutlineEdit } from "react-icons/md";
import './timer.css';
function App()
{
    return(
        <div  style={{background:'#eae9ec'}}>
            
        <Breadcrumb className="bread-border">
            <Breadcrumb.Item active >Home</Breadcrumb.Item>
            <Breadcrumb.Item >My Profile</Breadcrumb.Item>
        </Breadcrumb><br/>
        <Container fluid>
          <Row>
             <Col lg='4' md='4' sm='12' xs='12'>
          <div className="Whole-box">
             <div className="My-thing-active"><CgProfile className="front"/> My Profile</div><hr/>
             <div className="My-thing"><IoWalletOutline className="front"/> My Wallet</div><hr/>
             <div className="My-thing"><BsTruckFront className="front"/> My Orders</div><hr/>
             <div className="My-thing"><GoHeartFill className="front"/> My Wishlist</div><hr/>
             <div className="My-thing"><IoCardOutline className="front"/> My Saved Payments </div><hr/>
             <div className="My-thing"><AiOutlineLogout className="front"/> Log Out</div>
          </div>
             </Col>
             
             <Col lg='2' md='2' sm='12' xs='12' className="blur-back">
                 <img src={Profile} alt="profile"/>
             </Col>
             <Col lg='4' md='4' sm='12' xs='12'  className="blur-back">
                 <h3>Sakthi</h3>
                 <div><b className="light-weight">email: </b>rsakthiparkavi@....    <i style={{color:'green'}}>verified</i></div>
                 <div><b className="light-weight">Mobile:</b> 6374129939</div>
                 <div><b className="light-weight">Date of Birth:</b> 27/11/2003</div>
             </Col>
             <Col lg='1' md='2' sm='12' xs='12' className="the-pencil blur-back" >
             <div className="pencil"><MdOutlineEdit style={{fontSize:'20px'}}/>Edit</div>
             </Col>
          </Row>
        </Container><br/>
        
        </div>
    );
}
export default App;