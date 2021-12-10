import React, { useState, useEffect } from "react";
import { Row, Container, Col } from 'react-bootstrap';

import ContactList from "../../components/contact-list/contact-list.component";
import SearchBox from "../../components/search-box/search-box.component";
import AddingForm from "../../components/adding-form/adding-form.component";

const ContactListPage = () => {
    const [contacts, setContacts] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [form, setForm] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/contacts')
            .then(response => response.json())
            .then(contacts => setContacts(contacts));
    }, []);

    const handleChange = (e) => {
        setSearchField(e.target.value);
    }

    const removeContact = (id) => {
        fetch(`http://localhost:3001/contacts/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                const updatedContacts = contacts.filter(contact => contact.id !== id);
                setContacts(updatedContacts);
            }
            )
    }

    const addContact = (email, phone) => {
        fetch('http://localhost:3001/contacts', {
            method: 'POST',
            body: JSON.stringify(email, phone),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(contact => setContacts([...contacts, contact]))
    };

    const onChange = (name, phone) => {
        setForm({ ...form, [name]: phone });
    };

    const editContact = (contact) => {
        fetch(`http://localhost:3001/contacts/${contact.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
            .then(response => response.json())
            .then(data => {
                const updatedContacts = contacts.map(item => item.id === contact.id ? data : item);
                setContacts(updatedContacts);
            });
    }

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
        <Container >
            <Row className="mx-0">
                <Col className="px-0"><h1>Your contacts</h1></Col>
            </Row>
            <Row className="row-cols-1 row-cols-md-2 mx-0 my-4">
                <Col className="pe-3 ps-0">
                    <AddingForm
                        addContact={addContact}
                        onChange={(name, phone) => onChange(name, phone)}
                    />
                </Col>
                <Col className="pe-3 ps-0">
                    <SearchBox
                        placeholder='Search'
                        handleChange={handleChange}
                    />
                </Col>
            </Row>
            <Row className="mx-0 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                <ContactList
                    contacts={filteredContacts}
                    removeContact={(id) => removeContact(id)}
                    editContact={editContact}
                />
            </Row>
        </Container>
    )
}














// render() {
//     const { contacts, searchField } = this.state;
//     const filteredContacts = contacts.filter(contact =>
//         contact.name.toLowerCase().includes(searchField.toLowerCase())
//     );


// }
// }

export default ContactListPage;