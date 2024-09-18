import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css";
import Img1 from '../images/act.jpg';
import Img2 from '../images/act2.jpg';
import Img3 from '../images/may.jpg';
import Img4 from '../images/loral.jpg';
function UncontrolledExample() {
    return (
      <div style={{background:'#eae9ec'}}>
      <Carousel>
        <Carousel.Item>
          <img src={Img1} style={{height:'80vh',width:'100%'}} text="First slide" />
          <Carousel.Caption>
            <h3>Nykaa Cosmetics</h3>
            <p>Up to 50% offer</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={Img2} style={{height:'80vh',width:'100%'}} text="Second slide" />
          <Carousel.Caption>
            <h3>Kay Beauty</h3>
            <p>Up to 25% offer</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={Img3} style={{height:'80vh',width:'100%'}} text="Third slide" />
          <Carousel.Caption>
            <h3>Maybelline Newyork</h3>
            <p> Up to 35% offer</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img4} style={{height:'80vh',width:'100%'}} text="First slide" />
          <Carousel.Caption>
            <h3>Loreal Paris</h3>
            <p> Up to 35% offer</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    );
} 
export default UncontrolledExample;