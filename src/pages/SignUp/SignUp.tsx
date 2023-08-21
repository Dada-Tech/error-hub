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
          <div className="absolute top-32 right-8 flex justify-end w-full -mt-7">
              <div className="w-1/2">
                  <SignUpForm/>
              </div>
          </div>
      </div>
    );
}

export default SignUp;