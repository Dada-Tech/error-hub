import React, {useState} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import autocompleteStyling from "./autocompleteStyling";
import TextField from "@mui/material/TextField";
import classes from "./Autocomplete.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import fetchBookSuggestions from "../Googlebooksapi/Googlebooksapi";

interface Book {
    volumeInfo: {
        title: string;
    };
}

function Searchbar() {
    const muiStyling = autocompleteStyling();
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
            <div className="flex justify-center items-center gap-0.5 py-2">
                <Autocomplete
                    classes={muiStyling}
                    sx={{width: '634px'}}
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

export default Searchbar;
