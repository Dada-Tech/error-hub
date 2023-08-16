import React from 'react';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

const MyContainer = () => {
    return (
        <Container sx={{width: '635px'}} className="rounded-3xl m-32 mb-0 shadow-md hover:shadow-xl flex h-[779px] flex-col justify-center flex-shrink-0 items-center bg-white">
            <div className="pl-4">
                <div className="">
                    <div className="text-black text-[21px] pt-8">
                        <span>Upload your ebook to</span>
                        <span> </span>
                        <span className="text-blue font-semibold">ErrorHub</span>
                    </div>
                    <div className="pt-4">
                        <div className="pb-2 text-black text-base capitalize">Book Title</div>
                        <TextField
                            sx={{ width: '526px'}}
                            placeholder="To Kill a Mockingbird"
                            variant="outlined"
                            hiddenLabel
                        />
                    </div>
                    <div className="pt-4">
                        <div className="pb-2 text-black text-base capitalize">Author(s)</div>
                        <TextField
                            sx={{ width: '526px'}}
                            placeholder="Harper Lee"
                            variant="outlined"
                            hiddenLabel
                        />
                    </div>
                    <div className="pt-4">
                        <div className="pb-2 text-black text-base capitalize">ISBN</div>
                        <TextField
                            sx={{ width: '526px'}}
                            placeholder="9780062368683"
                            variant="outlined"
                            hiddenLabel
                        />
                    </div>
                    <div className="grid grid-cols-2 grid-rows-1 gap-4">
                        <div className="pt-8">
                            <div className="pb-2 text-black text-base capitalize">Book Type</div>
                            <TextField
                                placeholder="eg. kindle, mobi, pdf, ibook"
                                variant="outlined"
                                hiddenLabel
                            />
                        </div>
                        <div className="pt-8">
                            <div className="pb-2 text-black text-base capitalize">Error Type</div>
                            <TextField
                                placeholder="eg. Spelling, grammar, image"
                                variant="outlined"
                                hiddenLabel
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-1 gap-4">
                        <div className="pt-8">
                            <div className="pb-2 text-black text-base capitalize">Chapter</div>
                            <TextField
                                placeholder="Chapter"
                                variant="outlined"
                                hiddenLabel
                            />
                        </div>
                        <div className="pt-8">
                            <div className="pb-2 text-black text-base capitalize">Page Number</div>
                            <TextField
                                placeholder="Page Number"
                                variant="outlined"
                                hiddenLabel
                            />
                        </div>
                    </div>
                </div>
                <div className="pt-8 flex item-center justify-center">
                    <Button variant="contained" sx={{ width: '526px'}} color="primary" className="h-[54px] bg-sky-500 rounded-[10px] shadow uppercase bg-lightBlue"> upload </Button>
                </div>
            </div>
        </Container>
    );
};

export default MyContainer;