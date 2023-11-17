import React from 'react';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
;

const Offerings=() =>{
  return (
    <><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="Exam task\eadquize\public\images\img.jpg" />
          <Card.Body>
              <Card.Title>Balu Shahi Sweet</Card.Title>
              <Card.Text>
                  Rs.200/.
              </Card.Text>
              <Button variant="primary">Buy Now</Button>
          </Card.Body>
      </Card><Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="Exam task\eadquize\public\images\img3.jpg" />
              <Card.Body>
                  <Card.Title>Pastries</Card.Title>
                  <Card.Text>
                      Rs.1000/.
                  </Card.Text>
                  <Button variant="primary">Buy Now</Button>
              </Card.Body>
          </Card></>
  );
}

export default Offerings;
