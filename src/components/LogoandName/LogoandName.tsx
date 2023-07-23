import React from 'react';
import classes from '../../pages/Home/Home.module.scss';
import errohublogo from '../Images/errohublogo.png';

function OuterDiv() {
  return (
    <div className="outer-div">
      <img className={classes.errorhublogo} src={errohublogo} alt="errohublogo" />
      <div className="absolute w-204 h-79 left-68 top-0 text-secondBlack font-saira font-semibold text-5xl leading-79"> Error-Hub </div>
    </div>
  );
}

export default OuterDiv;
