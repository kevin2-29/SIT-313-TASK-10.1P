import React from 'react';
import './App.css';

function NavigationBar() {
    return (
        <div className="topnav">
            <div className="logo"><img src={require("./Images/Logo.png")} alt="logo" width={150} height={50} /></div>
            {/* <a href="#news">Find DEV</a> */}
            <div className="search-container text-center">
                <div className='text-center'>
                <input type="text" placeholder="Search..." />
                {/* <button type="submit">Search</button> */}
                </div>
            <a href="#contact">Post </a>
            <a href="#about">Log In</a>
            
            </div>
        </div>
    );
}

export default NavigationBar;
