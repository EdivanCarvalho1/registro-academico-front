"use client"
import Form from 'react-bootstrap/Form';

export default function Select(props){
    return(
        <Form.Group className="mb-3 pr-4" controlId={props.id}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Select required={props.not_required ? false : true} defaultValue="">
                <option value="" disabled>
                    {props.default_value ? props.default_value : 'Selecione'}
                </option>
                {props.children}
            </Form.Select>
        </Form.Group>
    )
}