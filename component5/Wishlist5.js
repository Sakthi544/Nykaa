import React from "react";
import './timer.css';
import { Container } from 'reactstrap';
import { Row,Col } from 'reactstrap';
import Wish from '../images/wish.png';
import List from '../images/list.jpg';
function App()
{
    return(
        <div style={{background:'#eae9ec'}}>
            <Container>
                <Row>
                  <Col lg='3' md='3' sm='12' xs='12'>
                      <img src={List} alt='Wall' width='370' height='390' />
                  </Col>
                  <Col lg='7' md='7' sm='12' xs='12'  className="home-add">
                      <center><img src={Wish} alt="wishlist"/>
                           <h2>NO ITEMS IN THE WISHLIST</h2>
                           <div>Add now, Buy Later.</div>
                           <div>Save your favourite beauty items here!</div>
                           <button className="button-style-re">Start Shopping</button>
                      </center>
                  </Col>
                </Row>
            </Container><br/>
        </div>
    );
}
export default App;