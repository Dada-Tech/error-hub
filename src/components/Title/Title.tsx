import React from 'react';
import classes from './Title.module.scss';
import sallyImg from "../Images/Saly-1.png";

function Title() {
  return (
      <>
        <div className="flex justify-start p-8 pb-16">
          <div className="p-8 pb-0">
            <div className="grid grid-cols-2 grid-rows-1 gap-4">
              <div>
                <div className="text-white text-[34px] font-semibold">Welcome to <br/> </div>
                <div className="text-white text-2xl pb-1">Errorhub</div>
              </div>
                 <div className="relative justify-end top-0 w-full lg:w-96 lg:-mt-44 lg:-mr-56 sm:w-56 sm:top-12 md:w-96 md:-mt-44 md:-mr-56">
                <img className="absolute" src={sallyImg} alt="sallyImg"/>
              </div>
              <div className="Self-stretch grow shrink basis-0 text-[13px] z-10">
                An application in which users <br/>
                can submit errors found in E-books along <br/>
                with auto-filled metadata to correctly identify <br/>
                the book. These reports will be uploaded to <br/>
                a database.
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default Title;
