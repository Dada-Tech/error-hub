import React from 'react';
import classes from './Home.module.scss';
import { GlobalStyle } from '../../theme/theme';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
// import { options } from '../../components/Buttons/Autocomplete'


function Home () {
    const top100Books = [
        { label: 'To Kill a Mockingbird', id: 1 },
        { label: 'Brave New World', id: 2 },
        { label: 'The Grapes of Wrath', id: 3 },
        { label: 'The Catcher in the Rye', id: 4 },
        { label: 'The Sun Also Rises', id: 5 },
        { label: 'The Unbearable Lightness of Being', id: 6 },
        { label: 'The Hollow Chocolate Bunnies of the Apocalypse', id: 7 },
        { label: 'A Clockwork Orange', id: 8 },
    ];

    return (
        <>
            <GlobalStyle/>
                <div className={classes.header}> ErrorHub </div>
                <p className={classes.typography}> welcome to errorhub</p>
                <p className={classes.typography2}>
                    An application in which users
                    can submit errors found in E-books along
                    with auto-filled metadata to correctly identify
                    the book. These reports will be uploaded to
                    a database.
                </p>
            <Autocomplete
                disablePortal
                className={classes.searchbar}
                options={top100Books}
                // sx={{ width: 300 }}
                renderInput={(params) => <TextField className={classes.searchBarText} {...params} label="Search For A Book Title" />}
            />
        </>
    );
}

export default Home;