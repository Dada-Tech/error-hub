import React from 'react';
import classes from './LogoandName.module.scss';
import errohublogo from '../Images/errohublogo.png';

function OuterDiv() {
    return (
        <div className={classes.outerdiv}>
            <img className={classes.errorhublogo} src={errohublogo} alt="errohublogo" />
            <div className={classes.header}> Error-Hub </div>
        </div>
    );
}

export default OuterDiv;
