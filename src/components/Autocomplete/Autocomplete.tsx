import React, {useState} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import autocompleteStyling from "./autocompleteStyling";
import TextField from "@mui/material/TextField";
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
       <Autocomplete
            classes={muiStyling}
            sx={{width: '100%'}}
            options={suggestions}
            getOptionLabel={(option) => option.volumeInfo.title}
            renderInput={(params) => <TextField
                 {...params}
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
    );
}

export default Searchbar;
