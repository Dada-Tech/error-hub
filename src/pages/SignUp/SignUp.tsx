import React from 'react';
import classes from './SignUp.module.scss';
import { GlobalStyle } from '../../theme/theme';
import Container from '../../components/Container/Container';
import LogoandName from "../../components/LogoandName/LogoandName";
import SignUpForm from '../../components/Form/SignUpForm';
import Title from "../../components/Title/Title";
import sallyImg from "../../components/Images/Saly-1.png";

function SignUp() {
  return (
        <>
      <GlobalStyle />
        <Container />
        <LogoandName />
        {/* <Title/> */}

      <p className={classes.typography}> Sign in to Errorhub </p>
      <p className={classes.typography2}>
        An application in which users <br/>
        can submit errors found in E-books along <br/>
        with auto-filled metadata to correctly identify <br/>
        the book. These reports will be uploaded to <br/>
        a database.
      </p>

      <img className={classes.sallyimg} src={sallyImg} alt="sallyImg" />


      <div className="flex justify-end mr-20">
        <SignUpForm/>
      </div>
      
      </>
    );
}

export default SignUp;