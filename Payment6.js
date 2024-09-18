import React from "react";
import './timer.css';
import { Container } from 'reactstrap';
import { Row,Col } from 'reactstrap';
import Saved from '../images/saved.jpg';
function App()
{
    return(
        <div style={{background:'#eae9ec'}}>
            <Container>
                <Row>
                    <Col lg='3' md='3' sm='12' xs='12'>
                        <img src={Saved} alt="Payment" width='350' height='412'/>
                    </Col>
                    <Col lg='7' md='7' sm='12' xs='12'  className="home-add">
                        <h2>My Saved Payments</h2><hr/>
                        <h3 className="pay-opt">You do not have saved payment options.</h3>
                    </Col>
                </Row>
            </Container><br/>
        </div>
    );
}
export default App;