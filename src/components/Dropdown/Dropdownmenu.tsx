import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Menu1 = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <Select
                value={selectedValue}
                onChange={handleChange}
                displayEmpty // This prop shows the empty placeholder
                sx={{ width: '90%'}}
            >
                <MenuItem value="" disabled>eg. kindle, mobi, pdf, ibook</MenuItem>
                <MenuItem value="option1">Kindle</MenuItem>
                <MenuItem value="option2">Mobi</MenuItem>
                <MenuItem value="option3">iBook</MenuItem>
            </Select>
        </div>
    );
};

const Menu2 = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <Select
                value={selectedValue}
                onChange={handleChange}
                displayEmpty // This prop shows the empty placeholder
                sx={{ width: '90%'}}
            >
                <MenuItem value="" disabled>eg. Spelling, grammar, image</MenuItem>
                <MenuItem value="option4">Spelling</MenuItem>
                <MenuItem value="option5">Grammar</MenuItem>
                <MenuItem value="option6">Image</MenuItem>
            </Select>
        </div>
    );
};

const Menu3 = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <Select
                value={selectedValue}
                onChange={handleChange}
                displayEmpty // This prop shows the empty placeholder
                sx={{ width: '90%'}}
            >
                <MenuItem value="" disabled>Chapter</MenuItem>
                <MenuItem value="option7">Chapter 1</MenuItem>
                <MenuItem value="option8">Chapter 2</MenuItem>
                <MenuItem value="option9">Chapter 3</MenuItem>
            </Select>
        </div>
    );
};

const Menu4 = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <Select
                value={selectedValue}
                onChange={handleChange}
                displayEmpty // This prop shows the empty placeholder
                sx={{ width: '90%'}}
            >
                <MenuItem value="" disabled>Page Number</MenuItem>
                <MenuItem value="option10">Page 1</MenuItem>
                <MenuItem value="option11">Page 2</MenuItem>
                <MenuItem value="option12">Page 3</MenuItem>
            </Select>
        </div>
    );
};

export {Menu1, Menu2, Menu3, Menu4};
