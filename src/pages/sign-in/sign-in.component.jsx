import React, { useState } from "react";

import { Row, Button, Form, Alert } from 'react-bootstrap';

const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        checkUser(email, password);
        setEmail("");
        setPassword("");
    }

    const checkUser = (email, password) => {
        const url = `http://localhost:3001/users?user=${email}&password=${password}`;
        fetch(url)
            .then(response => response.json())
            .then(loginedUser => {
                loginedUser.length ?
                    props.onSignIn() :
                    showAlert();
            });
    }

    const showAlert = () => {
        setAlert(true);
    }

    const alertComponent = () => {
        if (alert) {
            return (<Alert variant="danger" onClose={() => setAlert(false)} dismissible>
                <Alert.Heading>Ooops! You got an error!</Alert.Heading>
                <p>
                    Please check your email and password and try again.
                </p>
            </Alert>);
        }
    }

    const clearForm = (e) => {
        e.preventDefault();

        setEmail("");
        setPassword("");
    }


    return (<div>
        <h2 className="text-center">Please sign-in</h2>
        <Row className="mx-0">
            {alertComponent()}
            <Form onSubmit={(e) => onSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="secondary" className="me-1" onClick={(e) => clearForm(e)}>Cansel</Button>
                <Button variant="success" type="submit">Submit</Button>
            </Form>
        </Row>
    </div>)
}

export default SignIn;