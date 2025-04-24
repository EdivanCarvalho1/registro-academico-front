"use client"
import Form from 'react-bootstrap/Form';

export default function FileInput(props){
    return(
        <Form.Group required={props.not_required ? false : true} controlId={props.id} className="mb-3 mr-5">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type="file" size={props.size ? props.size : "lg"} />
        </Form.Group>
    )
}