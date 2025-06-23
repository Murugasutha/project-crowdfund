import React from 'react';
import { Form } from 'react-bootstrap';

function SelectFilter({value, onChange, options}) {
    return ( 
        <>
            <Form.Select value={value} onChange={onChange} className='py-3'>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </Form.Select>
        </>
     );
}

export default SelectFilter;