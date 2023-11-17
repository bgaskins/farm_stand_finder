import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar () {
    console.log('Navbar rendered');

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/help">Help</Link>
            <h1>Hello!</h1>
        </nav>
    )
}