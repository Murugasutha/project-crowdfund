import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

function SearchBar(props) {
    return ( 
        <>
            <InputGroup >
                <Form.Control
                    placeholder={props.placeholder}
                    value={props.searchTerm}
                    onChange={(e) => props.setSearchTerm(e.target.value)}
                    className='py-3'
                />
                <Button variant='success' className='fs-5' onClick={props.onSearch}>
                    Search
                </Button>
            </InputGroup>
        </>
     );
}

export default SearchBar;