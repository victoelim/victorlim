import React from 'react';
import "../Navbar/Navbar.css";

const Navbar = () => {
    return (
        <>
            <div className = "navbar">
                <h1>Victor Lim</h1>
                <div className ="navlinks">
                    <a href = "#">About</a>
                    <a href = "#">Project</a>
                </div>
            </div>
            
        </>
    )
}

export default Navbar;