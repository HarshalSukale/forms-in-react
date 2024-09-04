// Filename: Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#282c34', color: 'white' }}>
            <Link to="/" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link to="/form" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>Form</Link>
            <Link to="/calculator" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>Calculator</Link>
            <Link to="/tictactoe" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>Tic-Tac-Toe</Link>
        </nav>
    );
};

export default Navbar;