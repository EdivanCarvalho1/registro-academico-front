"use client"
import Form from 'react-bootstrap/Form';

export default function Input(props){
    return(
        <Form.Group className="mb-3 pr-4" controlId={props.id}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder} />
        </Form.Group>
    )
}