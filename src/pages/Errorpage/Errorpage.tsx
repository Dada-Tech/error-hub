import React from 'react';
import { GlobalStyle } from '../../theme/theme';
import LogoandName from "../../components/LogoandName/LogoandName";
import MyContainer from "../../components/Container/secondContainer";
import Errorhubtitle from "../../components/Title/Errorhubtitle";

function Errorpage() {
    return (
        <div className="flex flex-wrap align-top w-full">
            <GlobalStyle/>
            <div className="bg-blue w-full">
                <LogoandName/>
                <Errorhubtitle/>
            </div>
            <div className="absolute top-32 flex justify-center w-full -mt-7">
                <div className="w-1/2">
                    <MyContainer/>
                </div>
            </div>
        </div>
    );
}

export default Errorpage;