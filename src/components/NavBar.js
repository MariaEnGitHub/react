import React from 'react'
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Celu Lovers</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Comprar" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Productos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Carrito</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Cómo Comprar</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Ayuda</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}





//Crea una carpeta dentro de src llamada components que contenga a NavBar.js para crear una barra 
//de menú simple, que tenga:
//Brand (título/nombre de la tienda)
//Un listado de categorías clickeables
//Incorpora alguna librería de estilos con bootstrap/materialize u 
//otro de tu preferencia (opcional).
