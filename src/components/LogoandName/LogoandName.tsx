import React from 'react';
import errohublogo from '../Images/errohublogo.png';

function OuterDiv() {
    return (
        <div className="flex w-272 h-79 justify-start items-center pt-4 pl-4">
            <img className="w-16 flex-shrink-0" src={errohublogo} alt="errohublogo" />
            <div className="pl-2 text-5xl font-['Saira_SemiCondensed'] font-semibold text-secondBlack ] w-[252px]">Error-Hub</div>
        </div>
    );
}

export default OuterDiv;
