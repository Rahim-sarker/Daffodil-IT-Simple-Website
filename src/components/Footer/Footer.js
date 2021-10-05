import React from 'react';
import { Col, Row } from 'react-bootstrap';


const Footer = () => {
    return (
        <div>

             <footer  className="bg-dark text-white pt-2 pb-2">
            <Row>
                <Col sm={8}> <small>© 2020 Daffodil Institute of IT. All Rights Reserved</small></Col>
                <Col sm={4}><small>Designed and Developed by Rahim Sarker</small></Col>
           </Row>
                
             </footer>
        </div>
    );
};

export default Footer;