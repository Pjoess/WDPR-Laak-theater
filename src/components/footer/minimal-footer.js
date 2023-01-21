import { Container, Row, Col } from 'react-bootstrap';

function MinimalFooter() {
    return (
        <footer>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <p className="text-center">Copyright <i className="fa fa-copyright" aria-hidden="true"></i> Fake Theater Laak</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default MinimalFooter;
