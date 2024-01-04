import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Little Lemon</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to="/booking" className="nav-link">Book Table</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about" className="nav-link">About Little Lemon</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/testimonials" className="nav-link">Customers Say</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/specials" className="nav-link">Specials</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Navigation;
