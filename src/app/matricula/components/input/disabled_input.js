"use client"
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function DisabledInput(props) {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [bgColor, setBgColor] = useState('#888 !important');

    const handleSwitchChange = (e) => {
        const isChecked = e.target.checked;
        setIsSwitchOn(isChecked);
        if(bgColor == '#888 !important'){
            setBgColor('white')
        } else{
            setBgColor('#888 !important')
        }
    };

    return (
        <Form.Group className="mb-3 pr-4" controlId={props.id}>
            <div className='d-flex w-100 justify-content-between'>
                <Form.Label>{props.label}</Form.Label>
                <Form.Check
                    type="switch"
                    id={`${props.id}-switch`}
                    checked={isSwitchOn}
                    onChange={handleSwitchChange}
                    style={{ transform: "scale(1.5)" }}
                />
            </div>
            <Form.Control 
                type={props.type} 
                placeholder={props.placeholder || "insira"} 
                disabled={!isSwitchOn}
                style={{ 
                    backgroundColor: bgColor,
                    color: isSwitchOn ? '#000' : '#fff'
                }}
            />
        </Form.Group>
    );
}