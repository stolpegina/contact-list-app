import React, { useState } from "react";

import { Form, Button } from 'react-bootstrap';

const AddingForm = (props) => {
    const [contact, setContact] = useState({
        name: '',
        phone: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();

        props.addContact(contact);
        setContact({
            name: '',
            phone: ''
        });
    }

    return (
        <Form onSubmit={(e) => onSubmit(e)}>
            <h2>Add contacts</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    type="tel"
                    placeholder="Phone"
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                />
            </Form.Group>
            <Button variant="success" type="submit">Add contact</Button>
        </Form>
    )
}

export default AddingForm;