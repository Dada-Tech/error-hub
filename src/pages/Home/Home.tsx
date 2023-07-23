import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import classes from './Home.module.scss';
import { GlobalStyle } from '../../theme/theme';
import sallyImg from '../../components/Images/Saly-1.png';
// import errohublogo from '../../components/Images/errohublogo.png';
// import Container from '@mui/material/Container';
import Container from '../../components/Container/Container';
import LogoandName from "../../components/LogoandName/LogoandName";

function Home() {
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
      <GlobalStyle />
        <Container />
        <LogoandName/>
         {/*<div className={classes.logoheader}/>*/}
      {/*<img className={classes.errorhublogo} src={errohublogo} alt="errohublogo" />*/}
      {/*<div className="absolute w-204 h-79 left-68 top-0 text-secondBlack font-saira font-semibold text-5xl leading-79"> Error-Hub </div>*/}

      <p className={classes.typography}> welcome to errorhub </p>
      <p className={classes.typography2}>
        An application in which users <br/>
        can submit errors found in E-books along <br/>
        with auto-filled metadata to correctly identify <br/>
        the book. These reports will be uploaded to <br/>
        a database.
      </p>

        <img className={classes.sallyimg} src={sallyImg} alt="sallyImg" />

      <Autocomplete
        disablePortal
        className={classes.searchbar}
        options={top100Books}
        renderInput={(params) => <TextField className={classes.searchbartext} {...params} label="Search For A Book Title" />}
      />
    </>
  );
}

export default Home;
