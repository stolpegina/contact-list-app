import React from "react";

import './search-box.styles.css';

import { InputGroup, FormControl } from 'react-bootstrap';

const SearchBox = ({ placeholder, handleChange }) => (
    <>
        <h2>Search contact</h2>
        <InputGroup className="search-box">
            <InputGroup.Text id="basic-addon2">&#128269;</InputGroup.Text>
            <FormControl
                aria-label="Search"
                aria-describedby="basic-addon2"
                type='search'
                placeholder={placeholder}
                onChange={handleChange}
            />
        </InputGroup>
    </>
)

export default SearchBox;