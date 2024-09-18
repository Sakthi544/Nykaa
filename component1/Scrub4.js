import React from "react";
import './Space.css';
import { Container } from 'reactstrap';
import { Row,Col } from 'reactstrap';
function App()
{
   return(
    <div  style={{background:'#eae9ec'}}>
            <Container fluid className='Container-spl ' >
                <Row>
                   <Col  lg="2"  >
                       <p class="peel">Scrubs</p>
                    </Col>    
                    <Col lg="2" >
                       <p class="peel">Get Moisturiser</p>
                    </Col>
                   
                    <Col lg="2"  >
                       <p class="peel">Face Wash</p>
                    </Col>
                    <Col lg="2">   
                        <p  class="peel">Mask & Peels</p>
                    </Col>
                    <Col lg="2"  >    
                        <p class="peel">Toners</p>
                    </Col>
                    <Col lg="2" >
                        <p class="peel">Spot Corrector</p><br/>
                    </Col>
            </Row>
           </Container>
    </div>
   );
}
export default App;