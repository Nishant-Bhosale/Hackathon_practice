import React from 'react';
import  styles from './Navbar.module.css';
import { NavLink, Link } from 'reactrouterdom';




export default function Navbar() {
    return (
        <>
        <header className={styles.main}>
        <nav className="main-nav">
            <div className="main-logo">
                <a href="/"><span>A</span>rcadian</a>
            </div>
            <div className="name">
                <span>Welcome Name ....</span>
            </div>
            <ul className="main-nav-items">
                <li className="main-nav-item"><a href="/">Account</a></li>
                <li className="main-nav-item"><a href="/">Collections</a></li>
                <li className="main-nav-item"><a href="/">Contents</a></li>
                <li className="main-nav-item"><a href="/">Profile</a></li>
                <li className="main-nav-item"><a href="/">Theme</a></li>
            </ul>
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    </header>
        </>
    )
}
