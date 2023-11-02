import React from 'react'
import { Navbar, Container, NavbarCollapse, Nav, Badge, } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <Navbar style={{zIndex:'1'}} expand="lg" className="bg-primary position-fixed mb-5 w-100 ">
      <Container>
        <Navbar.Brand><Link to={'/'} className='fs-4' style={{ textDecoration: 'none', color: 'white', fontWeight:'bold' }}>
            <i className="fa-solid fa-truck-fast me-2"></i> E-cart
          </Link>
        </Navbar.Brand>
        <NavbarCollapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
                <Nav.Link className='btn border border-rounded'>
                    <Link to={'/wishlist'} className='d-flex align-items-center' style={{textDecoration: 'none', color: 'white', fontWeight:'bold'}}>
                    <i style={{color:"red"}} className="fa-solid fa-heart me-2" ></i>Wishlist
                        <Badge className='ms-2 bg-light rounded'> {wishlist.length} </Badge>
                    </Link>
                </Nav.Link>
                <Nav.Link className='btn border border-rounded ms-3'>
                    <Link to={'/cart'} className='d-flex align-items-center' style={{textDecoration: 'none', color: 'white', fontWeight:'bold'}}>
                    <i style={{color:"yellow"}} className="fa-solid fa-cart-shopping me-2"></i>cart
                        <Badge className='ms-2 bg-light rounded'> {cart.length}</Badge>
                    </Link>
                </Nav.Link>
            </Nav>
        </NavbarCollapse>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

      </Container>
    </Navbar>
  )
}

export default Header