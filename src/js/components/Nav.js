import React, { useState } from 'react';
import { Button, Navbar, Container, Row, Col } from 'react-bootstrap';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-scroll';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';
import { FaLeaf } from 'react-icons/fa';

const navItems = [
    { name: "Home", link: 'home' },
    { name: "About", link: 'about' },
    { name: "What is Keto", link: 'whatKeto' },
    { name: "Meals", link: 'meal' },
    { name: "Locations", link: 'location' },
    { name: "Contact", link: 'contact' },
]

const navIcons = [
    { icon: <AiFillFacebook className='nav__icon' /> },
    { icon: <AiOutlineInstagram className='nav__icon' /> },
    { icon: <AiOutlineTwitter className='nav__icon' /> },
    { icon: <FaPinterestP className='nav__icon' /> },
]

const logo = <FaLeaf style={{ color: "#9dca00" }} />;

export const NavBar = () => {
    return (
        <header className='fixed-top d-flex flex-column' id='nav'>
            <Container className="h-50 m-0 p-0" fluid>
                <Navbar className='d-flex flex-row justify-content-between h-100' id="nav__top">
                    <Row className='d-flex flex-row align-items-center justify-content-center w-100 ms-5 me-5 p-0'>
                        <Col xxl={9}>
                            <Navbar.Brand href="#home" style={{ color: 'white' }} id='nav__logo' className='lead'>{logo} Keto Manager</Navbar.Brand>
                        </Col>
                        <Col xxl={3} id='btn'>
                            <Button className='lead btn-md float-end me-3' id='nav__btn'>Learn More</Button>
                        </Col>
                    </Row>
                </Navbar>
            </Container>
            <Container className='h-50 m-0 p-0' fluid >
                <Navbar className="d-flex flex-row justify-content-between h-100" id='nav__bottom'>
                    <Row className='w-50 ms-5'>
                        {navItems.map((item, i) => {
                            return (
                                <Col className='nav__links text-center' key={i}>
                                    <Link
                                        to={item.link}
                                        spy={true}
                                        smooth={true}
                                        duration={50}
                                        offset={-55}
                                        className='nav__links-values lead position-relative text-decoration-none'
                                    >
                                        {item.name}
                                    </Link>
                                </Col>
                            )
                        })}
                    </Row>
                    <Row className='w-25 ms-1'>
                        {navIcons.map((item, i) => {
                            return (
                                <Col key={i} className='nav__links-socials'>
                                    {item.icon}
                                </Col>
                            )
                        })}
                    </Row>
                </Navbar>
            </Container>
        </header>
    )
}

//props: onClick event & toggle state from app.js
export const SideBar = ({toggleOnClick, toggled}) => {
    return (
        <Sidebar
            onBackdropClick={toggleOnClick}
            toggled={toggled}
            breakPoint='all'
            className='position-absolute fixed-top'
            id='sidebar'
        >
            <Menu id='sidebar__links-container'>
                {navItems.map((item, i) => {
                    return (
                        <MenuItem key={'nav' + i}>
                            <Link
                                to={item.link}
                                spy={true}
                                smooth={true}
                                duration={50}
                                offset={-55}
                                className='sidebar__links lead position-relative text-decoration-none'
                            >
                                {item.name}
                            </Link>
                        </MenuItem>
                    )
                })}
            </Menu>
            <Menu className='sidebar__menu w-50'>
                {navIcons.map((socials, i) => {
                    return (
                        <MenuItem key={'navIcon' + i} className='nav__links-socials'>
                            {socials.icon}
                        </MenuItem>
                    )
                })}
            </Menu>
        </Sidebar>

    )
}