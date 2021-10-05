import React from 'react';
import { Table } from 'react-bootstrap';

const About = () => {
    return (
     
      <div className="mt-5 pt-5">
         <h1 className="mt-3 mb-5">Information About DIIT</h1>
            <Table striped bordered hover size="sm">
  <thead>
  </thead>
  <tbody>
    <tr>
      <td>Official name of the University :</td>
      <td>Daffodil Institute of IT</td>
    </tr>

    <tr>
      <td>Year of establishment:</td>
      <td>In 1997, Daffodil Institute of IT (DIIT) became affiliated to the National University for conducting the BSc (Professional) in Computer Science and BBA programs.</td>
    </tr>

    <tr>
      <td>Campus buildings and locations :</td>
      <td>64/4 Lake circus, Kalabagan,
      Dolphin Goli, Dhaka -1205</td>
    </tr>

    <tr>
      <td>Programs :</td>
      <td>Undergraduate & Masters : 4</td>
    </tr>
    <tr>
      <td>Departments :</td>
      <td>
          <p>1.Department of Computer Science & Engineering
         </p>
         
         <p>2.Department of Business Administration
         </p>
         <p>3.Department of Tourism & Hospitality Management</p>
     </td>
    </tr>
    
  </tbody>
</Table>
      </div>
    );
};

export default About;