import React, { useState } from 'react';
import styles from './Account.module.css';

import { Button } from '@mui/material';
import { Login as LogIcon } from '@mui/icons-material';

import Register from './Register';

export default function Login() {
    const [formInput, setFormInput] = useState({})
    const [viewRegister, setViewRegister] = useState(false);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormInput(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div id={styles.formContainer}>
            {!viewRegister && <form action="#" id={styles.loginForm}>
                <span className={styles.formHeading}>Login to your profile</span>
                <input className={styles.loginInput} type="text" name="username" value={formInput.username || ''} onChange={handleChange} placeholder="Username" minLength="5" required />
                <input className={styles.loginInput} type="password" name="password" value={formInput.password || ''} onChange={handleChange} placeholder="Password" minLength="5" required />
                <Button variant="contained" startIcon={<LogIcon />}>Login</Button>
            </form>}
            {viewRegister && <Register />}
            <Button variant="contained" color="secondary" onClick={() => viewRegister ? setViewRegister(false) : setViewRegister(true)}>{viewRegister ? "Login to your profile" : "Sign up instead?"}</Button>
        </div>
    )
}
