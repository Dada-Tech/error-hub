import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import classes from './Home.module.scss';
import { GlobalStyle } from '../../theme/theme';
import sallyImg from '../../components/Images/Saly-1.png';
import Container from '../../components/Container/Container';
import LogoandName from "../../components/LogoandName/LogoandName";
import autocompleteStyling from "./autocompleteStyling";
import SearchIcon from '@mui/icons-material/Search';
import fetchBookSuggestions from "../../components/Googlebooksapi/Googlebooksapi";

interface Book {
    volumeInfo: {
        title: string;
        // Add other properties from the response as needed
    };
    // Add other properties from the response as needed
}

function Home() {
    const fine = autocompleteStyling();

    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState<Book[]>([]);

    const handleInputChange = (event: React.SyntheticEvent, newValue: string) => {
        setInputValue(newValue);
        if (newValue) {
            fetchBookSuggestions(newValue).then((results) => {
                setSuggestions(results);
            });
        }
        else {
            setSuggestions([]);
        }
    };

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
                    classes={fine}
                    className={classes.searchbar}
                    options={suggestions}
                    getOptionLabel={(option) => option.volumeInfo.title}
                        renderInput={(params) => <TextField
                        className={classes.searchbartext} {...params} InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <>
                                <SearchIcon color="disabled"/>
                                {params.InputProps.startAdornment}
                            </>
                        ),
                    }}
                        label="Search For A Book Title" variant="outlined"/>}
                    inputValue={inputValue}
                    onInputChange={handleInputChange}
                />
            </>
        );
}

export default Home;
