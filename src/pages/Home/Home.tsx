import React from 'react';
import { GlobalStyle } from '../../theme/theme';
import Container from '../../components/Container/Container';
import LogoandName from "../../components/LogoandName/LogoandName";
import Title from "../../components/Title/Title";
import Searchbar from "../../components/Autocomplete/Autocomplete";

function Home() {
    return (
            <>
                <GlobalStyle/>
                <Container/>
                <LogoandName/>
                <Title/>
                <Searchbar/>
            </>
        );
}

export default Home;
