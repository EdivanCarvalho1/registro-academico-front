"use client"
import Form from 'react-bootstrap/Form';

export default function Input(props){
    return(
        <Form.Group required={props.not_required ? false : true} className="mb-3 pr-4" controlId={props.id}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control required type={props.type} placeholder={props.placeholder ? props.placeholder : "insira"} />
        </Form.Group>
    )
}