import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact-item.styles.css';

import { Card, Button, Col, CloseButton, Form } from 'react-bootstrap';

const ContactItem = (props) => {
    const [contact, setContact] = useState({
        id: props.id,
        name: props.name,
        phone: props.phone
    });
    const [mode, setMode] = useState(true);

    const onClick = () => {
        if (!mode) {
            props.editContact(contact);
        }
        setMode(!mode);
    }

    return (
        <Col className="px-0">
            <Card className="contact-item my-2">
                <CloseButton
                    className="close-button"
                    onClick={props.removeContact}
                />
                <Card.Img variant="top" src={`https://robohash.org/${contact.id}?set=set5&size=180x180`} />
                {mode
                    ? <Card.Body className="text-center">
                        <Card.Title>{contact.name}</Card.Title>
                        <Card.Text>{contact.phone}</Card.Text>
                        <Button
                            variant="primary"
                            onClick={onClick}
                        >Edit</Button>
                    </Card.Body>
                    : <Form onSubmit={(e) => props.onSubmit(e)} className="text-center mb-3 mx-2">
                        <Form.Group className="mb-1">
                            <Form.Control
                                type="text"
                                value={contact.name}
                                onChange={(e) => setContact({ ...contact, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Control
                                type="text"
                                value={contact.phone}
                                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                            />
                        </Form.Group>
                        <Button
                            variant="success"
                            onClick={onClick}
                        >Save</Button>
                    </Form>
                }
            </Card>
        </Col >
    )
}

export default ContactItem;