import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './header.css';
const link = [
    'home',
    'resources',
    'team',
    'features',
    'community',
    'downloads',
    'contuct us',
];
const btnText = 'contuct us';
const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <Navbar
                    expand='lg'
                    className='navbar'
                    variant='light'
                    bg='inherit'>
                    <Container>
                        <Nav className='menu-item'>
                            {link.map((item) => (
                                <Nav.Link className='li' href='#'>
                                    {item.toUpperCase()}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Container>
                </Navbar>
                <div className='header-content'>
                    <h1>Secure and Anonymous Cryptocurrency</h1>
                    <div className='line'></div>
                    <div className='header-p-text'>
                        <p>
                            Lymcoin is a decentralized, hybrid blockhain that is
                            fully open-source.
                        </p>
                        <Button className='btn' variant='primary' size='sm'>
                            {btnText.toUpperCase()}
                        </Button>
                        <Button className='btn' variant='secondary' size='sm'>
                            {btnText.toUpperCase()}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
