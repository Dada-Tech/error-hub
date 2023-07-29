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
                {/*<div className={classes.logoheader}/>*/}
                {/*<img className={classes.errorhublogo} src={errohublogo} alt="errohublogo" />*/}
                {/*<div className="absolute w-204 h-79 left-68 top-0 text-secondBlack font-saira font-semibold text-5xl leading-79"> Error-Hub </div>*/}

                <p className={classes.typography}>
                    welcome to
                    <p className={classes.typography3}> errorhub </p>
                </p>
                <p className={classes.typography2}>
                    An application in which users <br/>
                    can submit errors found in E-books along <br/>
                    with auto-filled metadata to correctly identify <br/>
                    the book. These reports will be uploaded to <br/>
                    a database.
                </p>

                <img className={classes.sallyimg} src={sallyImg} alt="sallyImg"/>

                <Autocomplete
                    // disablePortal
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
