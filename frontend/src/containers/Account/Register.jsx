import React, { useState } from 'react';
import styles from './Account.module.css';

import { FormControl, InputLabel, MenuItem, Select, Button } from '@mui/material';
import { Save } from '@mui/icons-material';

export default function Register() {

    const [formInput, setFormInput] = useState({});
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormInput(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleGenderChange = ({ target }) => {
        setFormInput(prev => ({
            ...prev,
            gender: target.value
        }))
    }

    return (
        <form action="#" id={styles.signupForm}>
            <span className={styles.formHeading}>Create a user profile</span>
            <div className={styles.inputContainer}>
                <input className={styles.signupInput} type="text" name="username" value={formInput.username || ''} onChange={handleChange} placeholder="Username" minLength="5" required />
                <input className={styles.signupInput} type="password" name="password" value={formInput.password || ''} onChange={handleChange} placeholder="Password" minLength="5" required />
            </div>

            <div className={styles.inputContainer}>
                <input className={styles.signupInput} type="text" name="name" value={formInput.name || ''} onChange={handleChange} placeholder="Name" required />
                <input className={styles.signupInput} type="email" name="email" value={formInput.email || ''} onChange={handleChange} placeholder="Email" required />
            </div>

            <div className={styles.inputContainer}>
                <input className={styles.signupInput} type="number" name="age" value={formInput.age || ''} onChange={handleChange} placeholder="Age" min="13" required />
                <FormControl style={{ minWidth: 'calc(40% + 15px)' }}>
                    <InputLabel id="gender">Gender</InputLabel>
                    <Select
                        labelId="gender"
                        label="gender"
                        value={formInput.gender || ''}
                        onChange={handleGenderChange}
                    >
                        <MenuItem value={'male'}>Male</MenuItem>
                        <MenuItem value={'female'}>Female</MenuItem>
                        <MenuItem value={'other'}>Other</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <input className={`${styles.signupInput} ${styles.edu}`} type="text" name="education" value={formInput.education || ''} onChange={handleChange} placeholder="Education" />
            <Button variant="contained" startIcon={<Save />}>Add profile</Button>
        </form>
    )
}
