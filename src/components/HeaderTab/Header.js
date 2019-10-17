import React, { Component } from 'react';
import { MdMenu } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import './header.css'
import { NavDropdown } from 'react-bootstrap'
import DrawerToggleButton from './DrawerToggleButton'

class Header extends Component {

    render() {
        return (
            <div>
                <header className="toolbar">
                    <nav className="toolbar_navigation">
                        <div>
                            <DrawerToggleButton click={this.props.drawerClickHandler} />
                        </div>
                        <div className="toobar_logo"><h6>THE LOGO</h6></div>
                        <div className="navigation-items">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Home</a></li>
                            </ul>
                        </div>
                        <div className="spacer" />
                        <div className="toolbar_navigation-items">
                            <ul>
                                <li><FaUser className="icon mt-2"/></li>
                                <li><NavDropdown id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1" className="link-text">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;
