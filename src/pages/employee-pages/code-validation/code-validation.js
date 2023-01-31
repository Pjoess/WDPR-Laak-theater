import EmployeeNavigationBar from "../../../components/navigation-bar/employee.navigation-bar";
import MinimalFooter from "../../../components/footer/minimal-footer";
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";
import React from "react";
import axios from "axios";

export default function CodeValidation(){
    const [code, setCode] = React.useState('');
    const [response, setResponse] = React.useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post('/api/', { code });
            setResponse(res.data);
        } catch (error) {
            console.error(error);
        }
    };
    return(
        <div>
            <EmployeeNavigationBar/>
            <Container>
                <Row>
                    <Col>
                        <h1>Check code</h1>
                        <p>Voer code in</p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Control type="text" value={code} onChange={(event) => setCode(event.target.value)} />
                            </Form.Group>
                            <Button type="submit">Verstuur code</Button>
                        </Form>
                    </Col>
                </Row>
                {response && (
                    <Row>
                        <Col>
                            {response.valid ? (
                                <Alert variant="success">De code is geldig</Alert>
                            ) : (
                                <Alert variant="danger">De code is ongeldig</Alert>
                            )}
                            <div>
                                <p>Veld 1: {response.field1}</p>
                                <p>Veld 2: {response.field2}</p>
                                <p>Veld 3: {response.field3}</p>
                            </div>
                        </Col>
                    </Row>
                )}
            </Container>
            <MinimalFooter/>
        </div>
    )
}