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
    };
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
                        classes={fine}
                        className={classes.searchbar}
                        options={suggestions}
                        getOptionLabel={(option) => option.volumeInfo.title}
                        renderInput={(params) => <TextField
                            className={classes.searchbartext} {...params}
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: (
                                    <>
                                        <SearchIcon color="disabled"/>
                                        {params.InputProps.startAdornment}
                                    </>
                                ),
                            }}
                            placeholder="Search For A Book Title" variant="outlined"/>
                        }
                        inputValue={inputValue}
                        onInputChange={handleInputChange}
                    />
                </div>
            </>
        );
}

export default Home;
