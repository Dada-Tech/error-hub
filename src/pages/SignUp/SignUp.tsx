import React from 'react';
import { GlobalStyle } from '../../theme/theme';
import LogoandName from "../../components/LogoandName/LogoandName";
import SignUpForm from '../../components/Form/SignUpForm';
import Signuptitle from "../../components/Title/signupTitle";

function SignUp() {
  return (
      <div className="flex flex-wrap align-top w-full">
          <GlobalStyle/>
          <div className="bg-blue w-full">
              <LogoandName/>
              <Signuptitle/>
          </div>
          <div className="w-full lg:absolute lg:top-20 lg:right-8 lg:flex lg:justify-end lg:w-full-mt-16">
                <SignUpForm/>
          </div>
      </div>
    );
}

export default SignUp;