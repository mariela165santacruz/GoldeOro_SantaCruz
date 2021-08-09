import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../App.css";
import logo from "./img/atlas-solid.svg";
import CartWidget from "./CartWidget";

function navBar() {
  return (
    <div className="App">
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
        className="px-4"
      >
        <Navbar.Brand>
          <img className="logo" src={logo} width="40px" height="40px" />
          <h1 className="d-inline fs-4 align-middle px-3">Learning 2.0</h1>
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Productos">
              <NavDropdown.Item href="#productos/tea">Libros</NavDropdown.Item>
              <NavDropdown.Item href="#productos/coffee">PDF</NavDropdown.Item>
              <NavDropdown.Item href="#productos/chocolate">
                Videos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#productos/promo">
                Cursos
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link href="nosotros">Nosotros</Nav.Link>
            <Nav.Link href="contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Navbar>
    </div>
  );
}
export default navBar;