import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import React from 'react';

function Login(){

  return (
    <>
      <Container fluid="md">
        <Row>
          <Col>
            <header>
              <h1 style={{textAlign:'center'}}>Autenticação - AI QUE FOME DELIVERY</h1>
            </header>
          </Col>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Endereço de e-mail:</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha:</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="dark" type="submit" href='/home'>
              Login
            </Button>
          </Form>
        </Row>
      </Container>
      
    </>
  );
};

export default Login;



