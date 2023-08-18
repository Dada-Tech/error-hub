import React from 'react';
import { GlobalStyle } from '../../theme/theme';
import Container from '../../components/Container/Container';
import LogoandName from "../../components/LogoandName/LogoandName";
import SignUpForm from '../../components/Form/SignUpForm';
import Title from "../../components/Title/Title";

function SignUp() {
  return (
        <>
            <GlobalStyle />
            <Container />
            <LogoandName />
            <Title/>
            <div className="fixed top-32 right-8 flex justify-end w-[1384px] pb-5">
                <SignUpForm/>
            </div>
      </>
    );
}

export default SignUp;