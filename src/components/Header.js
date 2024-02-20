import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";

function BasicExample() {
  let path = require("../img/logo.png");

  return (
    <Navbar expand="md" className="bg-body-tertiary px-sm-3 px-md-0" collapseOnSelect>
      <Container style={{ maxWidth: 1200}}>
        <Navbar.Brand as={Link} to="/">
          <img
            src={path}
            height="100"
            className="d-inline-block align-top"
            alt="ACE logo"
          />
          <span
            className=""
            style={{
              width: "120px",
              textWrap: "wrap",
              wordWrap: "break-word",
              wordBreak: "break-word",
              whiteSpace: "normal",
              fontWeight: "bold",
              lineHeight: "1.2",
              paddingTop: "15px",
              display: "inline-block",
            }}
          >
            Adaptive Computing Experiences
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto navbar-expand-lg">
            <Nav.Link
              className={"header-link text-center py-4 py-md-0 px-0 mx-3"}
              as={NavLink}
              href="/about"
              to="/about"
            >
              About
            </Nav.Link>
            <Nav.Link
              className={"header-link text-center py-4 py-md-0 px-0 mx-3"}
              as={NavLink}
              href="/people"
              to="/people"
            >
              People
            </Nav.Link>
            <Nav.Link
              className={"header-link text-center py-4 py-md-0 px-0 mx-3"}
              as={NavLink}
              href="/projects"
              to="/projects"
            >
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
