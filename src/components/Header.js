import React from 'react';
import "./Header.css";
import { Nav, Container, NavDropdown } from "react-bootstrap";

function Header() {
    return (
        <div className='header'>
            <div className='header-top'>
                <Container>
                    <div className='header-brown'>
                        <div className='box-menu-head'>
                            <div className='box-go'>Go to Corporate Site</div>
                            <div className='box-ir-head'>IR Calendar</div>
                            <div className='box-infor'>Information Inquiry</div>
                        </div>
                        <button className='btn-language'>TH</button>
                        <button className='btn-language'>EN</button>
                    </div>
                </Container>
            </div>
            <div className='header-bottom'>
                <Container>
                    <Nav className="justify-content-end">
                        <NavDropdown title="COMPANY INFO" id="company-info-dropdown">
                            <NavDropdown.Item href="#action/3.1">General Information</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Nature of Business</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Business Structure</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Company Milestone</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Message from Chairman</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Message from CEO</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Vision & Mission</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Management Structure</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/financial">FINANCIAL INFO</Nav.Link>
                        <Nav.Link href="/stock">STOCK INFO</Nav.Link>
                        <Nav.Link href="/shareholder">SHAREHOLDER INFO</Nav.Link>
                        <Nav.Link href="/corporate">CORPORATE GOVERNANCE</Nav.Link>
                        <NavDropdown title="NEWS & PUBLICATIONS" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">SET Announcements</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">IR Press Release</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Presentations and Webcasts</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Prospectus / Filling</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Annual Report</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Form 56-1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Investtir Kits</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </div>
            <div className='logo'>
                <img src='/home/logo.png' width={116} alt='logo'/>
            </div>
        </div>
    )
}

export default Header;