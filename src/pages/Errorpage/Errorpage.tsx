import React, {useState} from 'react';
import { GlobalStyle } from '../../theme/theme';
import LogoandName from "../../components/LogoandName/LogoandName";
import ErrorhubContainer from "../../components/Container/errorhubContainer";
import Errorhubtitle from "../../components/Title/Errorhubtitle";
import {Searchbar, BookType} from "../../components/Container/errorhubContainer";

function Errorpage() {
    const [selectedBook, setSelectedBook] = useState<BookType | null>(null);

    const handleBookSelection = (book: BookType | null) => {
        setSelectedBook(book);
    };

    return (
        <div className="flex flex-wrap align-top w-full">
            <GlobalStyle/>
            <div className="bg-blue w-full">
                <LogoandName/>
                <Errorhubtitle/>
            </div>
            <div className="flex justify-center absolute w-full top-20 lg:top-8 md:top-4 sm:top-20">
                <div className="w-full md:w-1/2 lg:w-1/2 sm:w-full">
                    <Searchbar onSelectBook={handleBookSelection} />
                </div>
            </div>
            <div className="md:absolute top-32 flex justify-center md:w-full -mt-7">
                <div className="w-11/12 sm:w-11/12 md:w-1/2 lg:w-1/3">
                    <ErrorhubContainer selectedBook={selectedBook}/>
                </div>
            </div>
        </div>
    );
}

export default Errorpage;