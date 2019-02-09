import React from 'react';
import { Navbar } from 'react-bootstrap';
function Navigation () {
    return (
        <div>
            <Navbar className="navigation" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
        <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
        />
        {' tdc | photography'}
        </Navbar.Brand>
    </Navbar>
        </div>
    )
}

export default Navigation;