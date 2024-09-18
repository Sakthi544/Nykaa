import React,{Component} from "react";
import { Container } from 'reactstrap';
import { Row,Col } from 'reactstrap';
import { MdOutlineEdit } from "react-icons/md";
import { FcHome } from "react-icons/fc";
import { IoTrashOutline } from "react-icons/io5";
import Address from '../images/add.jpg';
import './timer.css';
function App()
{
    return(
    <div  style={{background:'#eae9ec'}}>
        <Container >
           <Row >
           <Col lg='3' md='3' sm='12' xs='12'>
               <img src={Address} alt="Address"/>
           </Col>
           <Col lg='7' md='7' sm='12' xs='12' className="home-add"><div className="new-add"><MdOutlineEdit className="add-sp"/>Add a New Address</div>
          <h3> <FcHome /> Addresses</h3>
          <div className="chennai">
              <div className="chennai-style">Chennai</div><br/>
              <h5>Sakthi</h5>
              <div>NH-3,Maraimalai Nagar,</div>
              <div>Chenngalpattu,Pin code:603 209</div>
              <h6>+91- 6374129939</h6>
              <div className="edit-trash">
                <div><MdOutlineEdit/>Edit   <IoTrashOutline />Remove</div>
              </div>
          </div>
           </Col>
           </Row>
        </Container><br/>
        
    </div>
    );
}
export default App;