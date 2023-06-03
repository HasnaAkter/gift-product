import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from './img/logo.png'
import { FaSearch } from 'react-icons/fa';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg"  variant="dark">
            <Container>
                <img src={logo} alt="" style={{
                    width: 48,
                    height: 48,
                    borderRadius: 999
                }} />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link style={{
              width: 39,
              height: 17,
               marginRight:40,
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 14,
              lineHeight: '124.19%',
              /* or 17px */

              letterSpacing: 2,

              color: 'white'
            }} to="/Home">Home</Nav.Link>
            <Nav.Link style={{
              width: 39,
              height: 17,

              marginRight:70,
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 14,
              lineHeight: '124.19%',
              /* or 17px */

              letterSpacing: 2,

              color: 'white'
            }} to="/ProductPage" eventKey={2} href="#memes">
              Categories
            </Nav.Link>
            <Nav.Link style={{
              width: 39,
              height: 17,
           
              marginRight:40,
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 14,
              lineHeight: '124.19%',
              /* or 17px */

              letterSpacing: 2,

              color: 'white'
            }} eventKey={2} href="#deets">Login</Nav.Link>
            <Nav.Link style={{
              width: 39,
              height: 17,
         
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 14,
              lineHeight: '124.19%',
              /* or 17px */

              letterSpacing: 2,

              color: 'white'
            }} eventKey={2} href="#memes">About_Us</Nav.Link>
                    </Nav>
                    <Nav>
            {/* <Nav.Link eventKey={2} href="#deets">Home</Nav.Link> */}


            <Form className="d-flex" style={{
                            marginLeft:37,
                            left: 85,
                            top: 8,
                            backgroundColor:'#131313',
                            background: 'gray',
                            borderRadius: 0
                        }}>
                            <Form.Control style={{ borderRadius: 0}}
                                type="search"
                                placeholder="Search"
                                
                                aria-label="Search"
                            />
                            <Button  style={{backgroundColor:'white' , color:'gray', borderRadius: 0}}> <  FaSearch/></Button>
                        </Form>

          
          </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;