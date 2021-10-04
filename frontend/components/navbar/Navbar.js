import React, { Component } from 'react'
import  './style.css'


export class Navbar extends Component {
    

    render() {
        return (
            <>
               <header className="main">
        <nav className="main-nav">
            <div className="main-logo">
                <a href="/">LOGO</a>
            </div>
            <ul className="main-nav-items">
                <li className="main-nav-item"><a href="/">Home</a></li>
                <li className="main-nav-item"><a href="/">Home</a></li>
                <li className="main-nav-item"><a href="/">Home</a></li>
                <li className="main-nav-item"><a href="/">Home</a></li>
            </ul>
        </nav>
    </header> 
            </>
        )
    }
}

export default Navbar

