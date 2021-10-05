import React from 'react';
import styles from './Navbar.module.css';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div id={styles.navbarContainer}>
            <div id={styles.navMeta}>
                <Link className={styles.homeLink} to="/">
                    <div id={styles.logoContainer}>
                        <span>Arcadian</span>
                    </div>
                </Link>
                <div id={styles.greetings}>
                    <span>welcome NAME</span>
                </div>
            </div>
            <div id={styles.navListContainer}>
                <ul id={styles.navList}>
                    <li className={styles.navLi}><NavLink className={styles.navLink} activeClassName={styles.activeLink} to='/account'>Login</NavLink></li>
                    <li className={styles.navLi}><NavLink className={styles.navLink} activeClassName={styles.activeLink} to='/userContent'>Posted Content</NavLink></li>
                    <li className={styles.navLi}><NavLink className={styles.navLink} activeClassName={styles.activeLink} to='/saved'>Saved</NavLink></li>
                    <li className={styles.navLi}><NavLink className={styles.navLink} activeClassName={styles.activeLink} to='/profile'>Profile</NavLink></li>
                    <li>THEME</li>
                </ul>
            </div>
        </div>
    )
}
