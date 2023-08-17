import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import classes from './Home.module.scss';
import { GlobalStyle } from '../../theme/theme';
import sallyImg from '../../components/Images/Saly-1.png';
import Container from '../../components/Container/Container';
import LogoandName from "../../components/LogoandName/LogoandName";
import autocompleteStyling from "./autocompleteStyling";
import SearchIcon from '@mui/icons-material/Search';

const listofBooks = [
    { label: 'To Kill a Mockingbird', id: 1 },
    { label: 'Brave New World', id: 2 },
    { label: 'The Grapes of Wrath', id: 3 },
    { label: 'The Catcher in the Rye', id: 4 },
    { label: 'The Sun Also Rises', id: 5 },
    { label: 'The Unbearable Lightness of Being', id: 6 },
    { label: 'The Hollow Chocolate Bunnies of the Apocalypse', id: 7 },
    { label: 'A Clockwork Orange', id: 8 },
];

function Home() {
    const muiStyling = autocompleteStyling();

    return (
            <>
                <GlobalStyle/>
                <Container/>
                <LogoandName/>

                <div className="flex justify-start p-8 pb-0">
                    <div className="p-8 pb-0">
                        <div className="grid grid-cols-2 grid-rows-1 gap-4">
                            <div>
                                <div className="text-white text-[34px] font-semibold">Welcome to <br/> </div>
                                <div className="text-white text-2xl font-normal pb-8">Errorhub</div>
                            </div>
                            <div>
                                <img className={classes.sallyimg} src={sallyImg} alt="sallyImg"/>
                            </div>
                            <div className="Self-stretch grow shrink basis-0 text-[13px] z-10">
                                An application in which users <br/>
                                can submit errors found in E-books along <br/>
                                with auto-filled metadata to correctly identify <br/>
                                the book. These reports will be uploaded to <br/>
                                a database.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-0.5 py-2">
                    <Autocomplete
                        classes={muiStyling}
                        sx={{width: '634px'}}
                        options={listofBooks}
                        renderInput={(params) =>
                            <TextField
                                className={classes.searchbartext} {...params} InputProps={{
                                ...params.InputProps,
                                startAdornment: (
                                    <>
                                        <SearchIcon color="disabled"/>
                                        {params.InputProps.startAdornment}
                                    </>
                                ),
                            }}
                                placeholder="Search For A Book Title"
                                variant="outlined"
                            />
                        }
                    />
                </div>
            </>
        );
}

export default Home;
