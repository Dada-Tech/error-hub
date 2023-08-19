import React from 'react';
import { GlobalStyle } from '../../theme/theme';
import LogoandName from "../../components/LogoandName/LogoandName";
import Title from "../../components/Title/Title";
import SignInContainer from "../../components/Container/SignInContainer";

function SignIn() {
    return (
        <div className="flex flex-wrap align-top w-full">
            <GlobalStyle/>
            <div className="bg-blue w-full">
                <LogoandName/>
                <Title/>
            </div>
            <div className="absolute top-32 right-8 flex justify-end w-full -mt-7">
                <div className="w-1/2">
                    <SignInContainer/>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
