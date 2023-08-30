import React, {useState} from 'react';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Menu1, Menu2 }from "../Dropdown/Dropdownmenu";
import autocompleteStyling from "../Autocomplete/autocompleteStyling";
import fetchBookSuggestions from "../Googlebooksapi/Googlebooksapi";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";

export type BookType = {
    volumeInfo: {
        title: string;
        authors: string[];
        industryIdentifiers: { identifier: string }[];
    };
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types
export function Searchbar ({ onSelectBook }) {

    const muiStyling = autocompleteStyling();
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState<BookType[]>([]);

    const [selectedBook, setSelectedBook] = useState<BookType | null>(null);

    const handleBookSelect = (event: React.SyntheticEvent, book: BookType | null) => {
        setSelectedBook(book);
        onSelectBook(book); // Send selected book details to parent
    };

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
            onChange={handleBookSelect}
        />
    );
}

const ErrorhubContainer = ({ selectedBook }: { selectedBook: BookType | null }) => {
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
                            placeholder="Book Title"
                            value={selectedBook?.volumeInfo?.title || ''}
                            variant="outlined"
                            hiddenLabel
                            disabled // Disable the input field
                        />
                    </div>
                    <div className="pt-4">
                        <div className="pb-2 text-black text-base capitalize">Author(s)</div>
                        <TextField
                            sx={{ width: '100%'}}
                            placeholder="Author"
                            value={selectedBook?.volumeInfo?.authors?.[0] || ''}
                            variant="outlined"
                            hiddenLabel
                            disabled // Disable the input field
                        />
                    </div>
                    <div className="pt-4">
                        <div className="pb-2 text-black text-base capitalize">ISBN</div>
                        <TextField
                            sx={{ width: '100%'}}
                            placeholder="ISBN"
                            value={selectedBook?.volumeInfo.industryIdentifiers?.[0]?.identifier || ''}
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
                            <TextField
                                type="number"
                                className="pb-2 text-black capitalize"
                                sx={{ width: '95%'}}
                                placeholder="Chapter Number"
                                variant="outlined"
                                inputProps={{ min: 1 }} // Minimum value
                                hiddenLabel
                            >Chapter</TextField>
                        </div>
                        <div className="pt-8">
                            <TextField
                                type="number"
                                className="pb-2 text-black"
                                sx={{ width: '100%'}}
                                placeholder="Page Number"
                                variant="outlined"
                                hiddenLabel
                                inputProps={{ min: 1 }} // Minimum value
                                >page number</TextField>
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