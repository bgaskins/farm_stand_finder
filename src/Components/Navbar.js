import React from 'react';
import { Link } from 'react-router-dom';



export default function Navbar () {
    console.log('Navbar rendered');
    return (
        // Navigation element containing links to different routes
        <nav>
            {/* Link to the Home route */}
            <Link to="/">Home</Link>
            {/* Link to the Help route */}
            <Link to="/help">Help</Link>
            {/* Link to the Farm Stand info route */}
            <Link to="/farm-stands">Farm Stands</Link>
        </nav>
    )
}
