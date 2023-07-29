import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import classes from './Home.module.scss';
import { GlobalStyle } from '../../theme/theme';
import sallyImg from '../../components/Images/Saly-1.png';
import Container from '../../components/Container/Container';
import LogoandName from "../../components/LogoandName/LogoandName";
import SignUpButton from '../../components/Form/SignUpButton';
import SignupForm from '../../components/Form/SignUpForm';

function SignUp() {
    return (
        <>
      <GlobalStyle />
        <Container />
        <LogoandName />
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
      
      <div className="container mx-auto box-content h-32 w-32">
      <SignupForm/>
      </div>
      
      </>
    );
}

export default SignUp;