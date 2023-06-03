import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import Hero from './img/Hero.png'
function DesplaySection() {
  return (
    <Card className="bg-dark text-white">
     <img src={Hero} className="w-100" />
     <Container>
     <Card.ImgOverlay style={{textAlign:'left',padding:120}}>
     <h4 style={{
                            fontSize: 68, width: 599
                            , color: 'black', backgroundColor: 'Magenta', textDecoration: 'underline overline',
                        }}>VINCENT’S SPHERE</h4>
                        <p className="m-0" style={{
                            width: 599,
                            marginLeft: -100,
                            fontSize: 32,
                            backgroundColor: 'Magenta',
                            color: 'black'
                        }}>HANDICRAFTED HAPPINESS FOR ALL</p>
                        <button style={{marginRight:1050 , borderRadius:0,paddingLeft:46,paddingRight:46}} className="btn btn-dark text mt-4 " >
                            EXPLORE
                        </button>
      </Card.ImgOverlay>
     
     </Container>
      
    </Card>
  );
}

export default DesplaySection;
