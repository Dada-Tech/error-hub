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

                <div className="relative left-[73px] w-[396px] h-[87px] flex-col justify-start items-start inline-flex">
                    <div className={classes.typography}>
                        <div className="text-white text-[34px] font-semibold">Welcome to <br/> </div>
                        <div className="text-white text-2xl font-normal">Errorhub</div>
                    </div>

                    <div className="self-stretch grow shrink basis-0 text-white text-[13px] font-light">
                        <div>
                            An application in which users <br/>
                            can submit errors found in E-books along <br/>
                            with auto-filled metadata to correctly identify <br/>
                            the book. These reports will be uploaded to <br/>
                            a database.
                        </div>
                    </div>

                    <img className={classes.sallyimg} src={sallyImg} alt="sallyImg"/>
                </div>

                {/*<div className="w-[329px] h-[115px] flex-col justify-start items-start inline-flex">*/}
                {/*    <div className="self-stretch grow shrink basis-0 text-white text-[13px] font-light">*/}
                {/*        An application in which users <br/>*/}
                {/*        can submit errors found in E-books along <br/>*/}
                {/*        with auto-filled metadata to correctly identify <br/>*/}
                {/*        the book. These reports will be uploaded to <br/>*/}
                {/*        a database.*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<img className={classes.sallyimg} src={sallyImg} alt="sallyImg"/>*/}

                <Autocomplete
                    classes={muiStyling}
                    className={classes.searchbar}
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
            </>
        );
}

export default Home;
