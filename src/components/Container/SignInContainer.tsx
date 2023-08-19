import React from 'react';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import GoogleIcon  from '@mui/icons-material/Google';
import {Facebook, Apple} from "@mui/icons-material";

const SignInContainer = () => {
    return (
        <Container sx={{width: '90%'}} className="rounded-3xl m-0 mb-0 h-[741px] shadow-md hover:shadow-xl bg-white">
            <div className="pl-4 pr-4">
                <div className="text-black">
                    <div className="text-black text-[21px] pt-8">
                        <span>Welcome to</span>
                        <span> </span>
                        <span className="text-blue font-semibold">ErrorHub</span>
                    </div>
                    <div className="text-[55px] capitalize">sign in</div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="capitalize">
                            <Button variant="contained" startIcon={<GoogleIcon/>} color="primary" className="w-80 h-[54px] bg-yellow-500 rounded-2xl shadow capitalize bg-secondlightBlue"> Sign in with Google </Button>
                        </div>
                        <div className=" grid grid-cols-2 grid-rows-1 gap-4">
                            <div className="">
                                <Button variant="contained" startIcon={<Facebook/>}  color="primary" className="h-[54px] bg-sky-500 rounded-2xl shadow capitalize bg-lightBlue"/>
                            </div>
                            <div className="capitalize">
                                <Button variant="contained" startIcon={<Apple/>} color="primary" className="h-[54px] bg-sky-500 rounded-2xl shadow capitalize bg-lightBlue"/>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <div className="pb-2 text-black text-base capitalize">Enter you username or email address</div>
                        <TextField
                            sx={{ width: '100%'}}
                            placeholder="Email Address"
                            variant="outlined"
                            hiddenLabel
                        />
                    </div>
                    <div className="pt-4">
                        <div className="pb-2 text-black text-base capitalize">Enter your password</div>
                        <TextField
                            sx={{ width: '100%'}}
                            placeholder="Password"
                            variant="outlined"
                            hiddenLabel
                        />
                    </div>
                </div>
                <div className="pt-8 capitalize">
                    <Button variant="contained" sx={{ width: '100%'}} color="primary" className="h-[54px] rounded-2xl shadow capitalize bg-lightBlue"> sign in </Button>
                </div>
            </div>
        </Container>
    );
};

export default SignInContainer;