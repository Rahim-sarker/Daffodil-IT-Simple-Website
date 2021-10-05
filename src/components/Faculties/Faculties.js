import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Faculty.css'

const Faculties = (props) => {
//   console.log(props)

const {course, img, duration, institute, tuitionFees} = props.faculty;

    return (
        <div className="faculty-card">
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img} />
       <Card.Body>
       <Card.Title>{course}</Card.Title>
      </Card.Body>
     <ListGroup className="list-group-flush">
      <ListGroupItem>{institute}</ListGroupItem>
      <ListGroupItem>{duration}</ListGroupItem>
      <ListGroupItem>Grand Total: {tuitionFees}</ListGroupItem>
      </ListGroup>
    </Card>
        </div>
    );
};

export default Faculties;