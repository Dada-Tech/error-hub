import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';


function SignupForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <Container maxWidth = "xs" className= "relative pt-5 bg-white rounded-[40px] shadow border flex flex-col justify-end items-center">
        <form onSubmit={handleSubmit}>
            <TextField
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

            <TextField
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)} />

            <TextField
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} />

            <TextField
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            

            <Button variant="contained" type = "submit" className="py-4 px-8 text-primary-contrast font-poppins text-16 font-normal text-normal capitalize"> Sign Up
            {/* <button type="submit" 
                Sign Up
            </button> */}
            </Button>
            </form>
            </Container>
      
    );
}


export default SignupForm;
