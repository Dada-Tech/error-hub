import React from 'react';
import { GlobalStyle } from '../../theme/theme';
import Container from '../../components/Container/Container';
import LogoandName from "../../components/LogoandName/LogoandName";
import MyContainer from "../../components/Container/secondContainer";
import Title from "../../components/Title/Title";
function Errorpage() {
    return (
        <>
            <GlobalStyle/>
            <Container/>
            <LogoandName/>
            <Title/>
            <MyContainer/>
        </>
    );
}

export default Errorpage;