import React from 'react';
import { Card} from 'react-bootstrap';

const Lecturer = (props) => {
    // console.log(props)
    const { name, img, post} = props.teacher;
    return (
    <div className="mt-5 ms-5">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text> {post}</Card.Text>
        </Card.Body>
       </Card>
    </div>
    );
};

export default Lecturer;