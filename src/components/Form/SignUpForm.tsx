import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


function SignupForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className='lg:fixed flex flex-row bg-white rounded-[40px] shadow border'>

            <div className = "flex flex-col w-[539px] h-[581px] pt-5 z-0" >

                <div className="w-[500px] h-8 bg-white flex-row items-start inline-flex ml-8 space-x-32">
                    <div className="text-center">
                        <span className="text-black text-opacity-90 text-[21px] font-normal">Welcome to</span>
                        <span className="text-black text-opacity-90 text-[13px] font-normal"> </span>
                        <span className="text-blue text-opacity-90 text-[21px] font-semibold">ErrorHub</span>
                       {/* // <Typography className="justify-end text-neutral-400 text-[13px] font-normal">Have an account?<br/></Typography><Typography className="text-sky-500 text-[13px] font-normal">Sign In</Typography> */}
                    </div>

                    <div className = "flex flex-col">
                        
                            <Typography className="text-black/50 text-[13px] font-normal">Have an account?</Typography>
        
                            <Typography className="text-blue text-[13px] font-normal">
                                <Link to = "./pages/SignIn/SignIn"> Sign In </Link>
                            </Typography>
                       
                    </div>
                </div> 

                <div className = "ml-8">
                    <Typography className="w-52 h-[83px] bg-white flex-col justify-center items-start inline-flex">
                        <div className="text-black text-opacity-90 text-[55px] font-normal">Sign Up</div>
                    </Typography>
                </div>

                <div className = "ml-8">
                    <Typography className="w-48 h-6 bg-white flex-col justify-center items-start inline-flex">
                        <div className="text-center text-black text-opacity-90 text-base font-normal capitalize">Enter you email address</div>
                    </Typography>
                </div>

                <div className = "flex px-8">
                    <TextField className = "flex flex-grow"
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                        
                <div className = "flex flex-row space-x-44 mt-8 px-8">
                    <Typography className = "w-[83px] h-6 bg-white flex-col justify-center items-start inline-flex">
                        <div className="text-center text-black text-opacity-90 text-base font-normal capitalize">username</div>
                    </Typography>

                    
                    <Typography className = "w-[119px] h-6 bg-white flex-col justify-center items-start inline-flex">
                        <div className="text-center text-black text-opacity-90 text-base font-normal capitalize">Phone Number</div>
                    </Typography>
                
                </div>

                <div className = "flex flex-row space-x-5 justify-center px-8">
                    <TextField className = "flex flex-grow"
                        type="text"
                        placeholder="Username"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />

                    <TextField className = "flex flex-grow"
                        type="tel"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)} />          
                </div>

                <div className = "mt-8">
                    <Typography>
                        <div className="w-[162px] h-[27px] text-center text-black text-opacity-90 text-base font-normal capitalize ml-8 ">Enter your password</div>
                    </Typography>
                </div>

                <div className = "flex px-8">
                    <TextField className = "flex-grow"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    
                </div>


                
                <div className = "flex justify-center mt-12 px-8">
                    <Button variant="contained" type = "submit" className="py-4 px-8 text-primary-contrast font-poppins text-16 font-normal text-normal capitalize flex-grow"> Sign Up
                    </Button>
                </div>

            </div>
        </form>
      
    );
}


export default SignupForm;
