import React, { useState } from 'react';
import './brand.css';
import { Row,Col } from 'reactstrap';
import { Container } from 'reactstrap';
import N1 from '../images/n1.png';
import N2 from '../images/n2.png';
import N3 from '../images/n3.png';
import N4 from '../images/n4.png';
import N5 from '../images/n5.png';
function App() {
    return(
        <div style={{background:'#eae9ec'}}>
            <h3 className='collection-name'>Shop By Collection</h3>
    <Container className='nykaa-collection'>
      <Row>
          <Col lg="2" className='shop-space' >
              <img src={N1} alt='n1'/>
              <div className='f-m'>NEW & TRENDING</div>
          </Col>
          <Col lg="2" className='shop-space'>
              <img src={N2} alt='n2'/>
              <div className='f-m'>NAILS</div>
          </Col>
          <Col lg="2" className='shop-space'>
              <img src={N3} alt='n3'/>
              <div className='f-m'>FACE</div>
          </Col>
          <Col lg="2" className='shop-space'>
              <img src={N4} alt='n4'/>
              <div className='f-m'>LIPS</div>
          </Col>
          <Col lg="2" className='shop-space'>
              <img src={N5} alt='n5'/>
              <div className='f-m'>EYES</div>
          </Col>
      </Row>
    </Container>
        </div>
    );
}
export default App;