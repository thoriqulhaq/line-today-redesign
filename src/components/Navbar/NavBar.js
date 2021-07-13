import React, { Component } from 'react';
import {Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";


class NavBar extends Component {
    render() {
        return (
            <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand>
                    <Link to="/" >
                    <img
                        alt="LINE TODAY"
                        src="https://static-today.line-scdn.net/dist/a8f36e72/static/img/brand-logo-rectangle-today-solid.svg"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    </Link>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Link to="/bookmark" >
                    <img src="assets/Bookmark.png"
                         alt="bookmark"
                         className="flex-row-reverse"
                         height="35"
                    />
                    </Link>
                </Nav>
            </Navbar>
            </div>
        )
    }
}

export default NavBar;