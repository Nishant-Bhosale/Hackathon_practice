import React, { useState } from 'react';
import styles from './Account.module.css';
import axios from 'axios';

import { FormControl, InputLabel, MenuItem, Select, Button, IconButton } from '@mui/material';
import { Save, PhotoCamera } from '@mui/icons-material';

import php from './media/php.png';

export default function Register() {

    const [formInput, setFormInput] = useState({});
    const [fileStatus, setFileStatus] = useState({ loaded: false });

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

    const handleFileChange = ({ target }) => {
        const file = target.files[0];
        setFormInput(prev => ({
            ...prev,
            php: file
        }))

        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            if (reader.readyState == '2') {
                setFileStatus(prev => ({
                    ...prev,
                    loaded: true,
                    src: reader.result
                }))
            }
        }
    }

    const handleResponse = (data) => {
        console.log(data);
    }
    const handleError = (err) => {
        console.log(err.status);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('done')
        const data = new FormData();
        Object.entries(formInput).map(info => {
            return data.append(info[0], info[1])
        })
        console.log(data)
        const addProfile = async () => {
            try {
                const response = await axios({
                    method: 'POST',
                    url: '/api/addProfile',
                    data: data
                })

                handleResponse(response.data)

            }
            catch (err) {
                handleError(err.response)
            }
        }
        // setFormInput({});
        addProfile();
    }

    console.log(formInput)
    return (
        <form action="#" id={styles.signupForm} onSubmit={handleSubmit}>
            <span className={styles.formHeading}>Create a user profile</span>
            <div id={styles.php}>
                <div id={styles.phpContainer}>
                    <img src={fileStatus.loaded ? fileStatus.src : php} alt="profile-picture" />
                </div>
                <input style={{ display: 'none' }} id="php-file-icon" type="file" accept="image/*" onChange={handleFileChange} />
                <label htmlFor="php-file-icon">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>

            </div>
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
            <Button variant="contained" startIcon={<Save />} type="submit">Add profile</Button>
        </form>
    )
}
