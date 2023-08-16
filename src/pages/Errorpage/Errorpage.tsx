import React from 'react';
import { GlobalStyle } from '../../theme/theme';
import Container from '../../components/Container/Container';
import LogoandName from "../../components/LogoandName/LogoandName";
import MyContainer from "../../components/Container/secondContainer";

function Errorpage() {
    return (
        <>
            <GlobalStyle/>
            <Container/>
            <LogoandName/>
            <MyContainer/>
        </>
    );
}

export default Errorpage;