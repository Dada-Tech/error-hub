import React from 'react';
import Container from '@mui/material/Container';
import {Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import {Menu1, Menu2, Menu3, Menu4}from "../Dropdown/Dropdownmenu";

const ErrorhubContainer = () => {
    return (
        <Container sx={{width: '70%'}} className="rounded-3xl m-0 mb-0 h-[779px] shadow-md hover:shadow-xl bg-white">
            <div className="pl-4 pr-4">
                <div className="">
                    <div className="text-black text-[21px] pt-8">
                        <span>Upload your ebook to</span>
                        <span> </span>
                        <span className="text-blue font-semibold">ErrorHub</span>
                    </div>
                    <div className="pt-4">
                        <div className="pb-2 text-black text-base capitalize">Book Title</div>
                        <TextField
                            sx={{ width: '100%'}}
                            placeholder="To Kill a Mockingbird"
                            variant="outlined"
                            hiddenLabel
                            disabled // Disable the input field
                        />
                    </div>
                    <div className="pt-4">
                        <div className="pb-2 text-black text-base capitalize">Author(s)</div>
                        <TextField
                            sx={{ width: '100%'}}
                            placeholder="Harper Lee"
                            variant="outlined"
                            hiddenLabel
                            disabled // Disable the input field
                        />
                    </div>
                    <div className="pt-4">
                        <div className="pb-2 text-black text-base capitalize">ISBN</div>
                        <TextField
                            sx={{ width: '100%'}}
                            placeholder="9780062368683"
                            variant="outlined"
                            hiddenLabel
                            disabled // Disable the input field
                        />
                    </div>
                    <div className="grid grid-cols-2 grid-rows-1 gap-0">
                        <div className="pt-8 text-black">
                            <div className="pb-2 text-black text-base capitalize">Book Type</div>
                            <Menu1/>
                        </div>
                        <div className="pt-8">
                            <div className="pb-2 text-black text-base capitalize">Error Type</div>
                            <Menu2/>
                          </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-1">
                        <div className="pt-8">
                            <div className="pb-2 text-black text-base capitalize">Chapter</div>
                            <Menu3/>
                        </div>
                        <div className="pt-8">
                            <div className="pb-2 text-black text-base capitalize">Page Number</div>
                            <Menu4/>
                        </div>
                    </div>
                </div>
                <div className="pt-8">
                    <Button variant="contained" sx={{ width: '100%'}} color="primary" className="h-[54px] bg-sky-500 rounded-2xl shadow uppercase bg-lightBlue"> upload </Button>
                </div>
            </div>
        </Container>
    );
};

export default ErrorhubContainer;