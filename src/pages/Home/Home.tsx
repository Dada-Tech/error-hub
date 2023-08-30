import React from 'react';
import { GlobalStyle } from '../../theme/theme';
import LogoandName from "../../components/LogoandName/LogoandName";
import Title from "../../components/Title/Title";
import Searchbar from "../../components/Autocomplete/Autocomplete";

function Home() {
    return (
            <div className="flex flex-wrap align-top w-full">
                <GlobalStyle/>
                <div className="bg-blue w-full">
                    <LogoandName/>
                    <Title/>
                </div>
                <div className="flex justify-center w-full -mt-7">
                    <div className="w-full md:w-1/2 lg:w-1/2 sm:w-full">
                        <Searchbar/>
                    </div>
                </div>
            </div>
        );
}

export default Home;
