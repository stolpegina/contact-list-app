import React from "react";
import ContactItem from "../contact-item/contact-item.component";

const ContactList = (props) => (
    props.contacts.map(contact => (
        <ContactItem
            key={contact.id}
            name={contact.name}
            id={contact.id}
            phone={contact.phone}
            removeContact={() => props.removeContact(contact.id)}
            editContact={props.editContact}
        />
    ))
)

export default ContactList;