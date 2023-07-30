import React from 'react';
import { GlobalStyle } from '../../theme/theme';
import { Container } from '../../components/Container/Container';
import { secondContainer } from '../../components/Container/Container';
import LogoandName from "../../components/LogoandName/LogoandName";
// import secondContainer from "../../components/Container/secondContainer";

function Errorpage() {
    return (
        <>
            <GlobalStyle/>
            <Container/>
            <secondContainer/>
            <LogoandName/>
        </>
    );
}

export default Errorpage;