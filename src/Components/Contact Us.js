import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const ContactUs=()=> {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control placeholder="Address" />
        </Col>
        <Col>
          <Form.Control placeholder="Email" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control placeholder="Describtion" />
        </Col>
      </Row>
      <Row>
        <Col>
        <Button variant="primary">Submit</Button>{' '}
        </Col>
      </Row>
    </Form>
  );
}

export { ContactUs};