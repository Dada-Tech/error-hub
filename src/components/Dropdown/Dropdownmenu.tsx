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
                sx={{ width: '95%'}}
            >
                <MenuItem value="" disabled>eg. kindle, mobi, pdf, ibook</MenuItem>
                <MenuItem value="option1">Kindle</MenuItem>
                <MenuItem value="option2">Mobi</MenuItem>
                <MenuItem value="option3">iBook</MenuItem>
                <MenuItem value="option4">PDF</MenuItem>
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
                sx={{ width: '100%'}}
            >
                <MenuItem value="" disabled>eg. Spelling, grammar, image</MenuItem>
                <MenuItem value="option5">Spelling</MenuItem>
                <MenuItem value="option6">Grammar</MenuItem>
                <MenuItem value="option7">Image</MenuItem>
            </Select>
        </div>
    );
};

export {Menu1, Menu2 };
