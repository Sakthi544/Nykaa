import React from "react";
import './Space.css';
import { Container } from 'reactstrap';
import { Row,Col } from 'reactstrap';
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { BiSolidPurchaseTag } from "react-icons/bi";
function App()
{
   return(
    <div  style={{background:'#eae9ec'}}>
         <Container fluid>
                <Row>
                <Col lg="3" md="3" sm="2" xs="6" >
                  <MdOutlineLocalShipping class='track' />
                  <section class='sec'>FREE SHIPPING</section>
                  <small class='sec'>On Orders Above ₹299</small>
               </Col>
               <Col lg="3" md="3" sm="2" xs="6" >
                  <GiReturnArrow class='track' />
                  <section class='sec'>EASY RETURNS</section>
                  <small class='sec'>15-Day Return Policy</small>
               </Col>
                <Col lg="3" md="3" sm="2" xs="6" > 
                   <BsFillPatchCheckFill class='track' />
                   <section class='sec'>100% AUTHENTIC</section>
                   <small class='sec'>Products Sourced Directly</small>
               </Col>
               <Col lg="3" md="3" sm="2" xs="6" > 
                  <BiSolidPurchaseTag class='track' />
                  <section class='sec'>1900+ BRANDS</section>
                  <small class='sec'>1.2 Lakh+ Products</small>
               </Col>
               </Row>
           </Container>
            <h5 style={{marginLeft:'9%',marginTop:'3%'}}>Popular Links</h5>
            <section class='para'>Lipstick,Highlighter,Hair Serum,Concealer,Face Mask,Biotique,Lip Gloss,Perfume 
                For Women,Facial Kit,Bb Cream,Victoria Secret,Love Beauty And Planet Shampoo,Eyeliner,
                Hair Mask,Face Wash For Oily Skin,Ordinary,Toner,Eyeshadow Palette,Cleanser,Chemist At 
                Play,Mascara,Loreal Professional,Hair Extensions,Olay Cream,Fogg,Lip Tint,Under Eye Cream,
                Wax Strips,Shower Gel,Sunscreen For Face,Insight Cosmetics,Face Foundation,Hair Removal 
                Machine,Mac Foundation,Choker,Oud Perfume,Makeup Pouch,Olaplex,Body Mist,Wella Shampoo,Huda
                Beauty Foundation,Night Cream,Facewash,Nyx,Schwarzkopf Shampoo,Blue Heaven,Peel Off Mask,
                Best Lip Balm,Face Scrub,Cetaphil Face Wash,Mederma Cream,Multivitamins Tablet,Himalaya 
                 Face Wash,Garnier Face Wash,Hair Color For Women,Cetaphil Moisturizers,Ponds Face Wash,
                 Streax Hair Serum,Nivea Body Lotions,Vaseline Body Lotions,Sugar Lipstick,Biotin Tablet,
                 Aqualogica Sunscreen,Salicylic Acid Face Wash,Fogg Perfume,Clean And Clear Face Wash,
                 Neutrogena Sunscreen,Pears Soaps,Hair Color For Men,Dry Cleansers,Face Serum
            </section>
    </div>
   );
}
export default App;