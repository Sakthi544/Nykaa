import React, { useState } from 'react';
import './brand.css';
import { Row,Col } from 'reactstrap';
import { Container } from 'reactstrap';
import Nyvd from "../images/nykaavd.mp4";
import Kay from "../images/kay.mp4";
import Beau from "../images/beauty.mp4";
function App()
{
    return(
        <div style={{background:'#eae9ec'}}>
            <Container>
        <Row>
            <Col  lg="3" xs="3">
                <video src={Nyvd} controls loop autoPlay muted>my video</video>
           </Col>
            <Col  lg="3">
                <video src={Kay} width="234" height="416" controls loop autoPlay muted>my video</video>
           </Col>
            <Col  lg="3">
                <video src={Beau} width="234" height="416" controls loop autoPlay muted>my video</video>
           </Col> 
           <Col  lg="3">
                <video src={Nyvd}  controls loop autoPlay muted>my video</video>
           </Col>     
        </Row>
    </Container>
        </div>
    );
}
export default App;