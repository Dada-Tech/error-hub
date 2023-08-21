import React from 'react';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

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
                        />
                    </div>
                    <div className="pt-4">
                        <div className="pb-2 text-black text-base capitalize">Author(s)</div>
                        <TextField
                            sx={{ width: '100%'}}
                            placeholder="Harper Lee"
                            variant="outlined"
                            hiddenLabel
                        />
                    </div>
                    <div className="pt-4">
                        <div className="pb-2 text-black text-base capitalize">ISBN</div>
                        <TextField
                            sx={{ width: '100%'}}
                            placeholder="9780062368683"
                            variant="outlined"
                            hiddenLabel
                        />
                    </div>
                    <div className="grid grid-cols-2 grid-rows-1 gap-0">
                        <div className="pt-8">
                            <div className="pb-2 text-black text-base capitalize">Book Type</div>
                            <TextField
                                // className=""
                                sx={{ width: '90%'}}
                                placeholder="eg. kindle, mobi, pdf, ibook"
                                variant="outlined"
                                hiddenLabel
                            />
                        </div>
                        <div className="pt-8">
                            <div className="pb-2 text-black text-base capitalize">Error Type</div>
                            <TextField
                                sx={{ width: '100%'}}
                                placeholder="eg. Spelling, grammar, image"
                                variant="outlined"
                                hiddenLabel
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-1">
                        <div className="pt-8">
                            <div className="pb-2 text-black text-base capitalize">Chapter</div>
                            <TextField
                                sx={{ width: '90%'}}
                                placeholder="Chapter"
                                variant="outlined"
                                hiddenLabel
                            />
                        </div>
                        <div className="pt-8">
                            <div className="pb-2 text-black text-base capitalize">Page Number</div>
                            <TextField
                                sx={{ width: '100%'}}
                                placeholder="Page Number"
                                variant="outlined"
                                hiddenLabel
                            />
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