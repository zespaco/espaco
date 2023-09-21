import styles from "../../styles/Home.module.css";
import DropDown from "./DropDown";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  return (
    <header className={styles.header}>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className={styles.testheader}>
          <Container fluid>
            <a href="./" id={styles.logo}>
              Espaço Digital <br></br>
              Financeiro
            </a>
            <Navbar.Toggle className={styles.hb} aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className={styles.backhamburguer}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className={styles.logoofcanva} id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Espaço Digital Financeiro
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className={styles.ofcanvagrid}>
                  <DropDown className={styles.instituicao}></DropDown>
                  <Nav.Link href="./sobrenos" className={styles.instituicao} css={{color:"white"}}>
                    Instituição
                  </Nav.Link>
                  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </header>
    // <header className={styles.header}>
    //  <a href="./" id={styles.logo}>
    //     Espaço Digital <br></br>
    //     Financeiro
    //   </a>
    //   <nav className={styles.nav}>
    //     <DropDown></DropDown>
    //     <a href="./sobrenos" className={styles.instituicao} >
    //       Instituição
    //     </a>
    //   </nav>

    // </header>
  );
};

export default Header;
