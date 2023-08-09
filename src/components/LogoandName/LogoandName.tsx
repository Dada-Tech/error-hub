import React from 'react';
// import classes from './LogoandName.module.scss';
import errohublogo from '../Images/errohublogo.png';

function OuterDiv() {
    return (
        <div className="w-[272px] h-[79px] relative left-[28px]">
            <img className="left-0 top-[13px] absolute min-h-0 min-w-0 w-16 shrink-0" src={errohublogo} alt="errohublogo" />
            <div className="left-[68px] top-[16px] absolute text-5xl font-['Saira_SemiCondensed'] font-semibold text-secondBlack ] w-[224px]">Error-Hub</div>
        </div>
    );
}

export default OuterDiv;
