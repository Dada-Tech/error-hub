import React from 'react';
import { GlobalStyle } from '../../theme/theme';
import LogoandName from "../../components/LogoandName/LogoandName";
import ErrorhubContainer from "../../components/Container/errorhubContainer";
import Errorhubtitle from "../../components/Title/Errorhubtitle";

function Errorpage() {
    return (
        <div className="flex flex-wrap align-top w-full">
            <GlobalStyle/>
            <div className="bg-blue w-full">
                <LogoandName/>
                <Errorhubtitle/>
            </div>
            <div className="md:absolute top-32 flex justify-center md:w-full -mt-7">
                <div className="md:w-1/2 lg:w-1/2">
                    <ErrorhubContainer/>
                </div>
            </div>
        </div>
    );
}

export default Errorpage;