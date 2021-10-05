import React, { useEffect, useState } from 'react';
import Faculties from '../Faculties/Faculties';
import './Services.css'



const Services = () => {
const [ faculties, setfaculties ] = useState([])
      useEffect(()=>{
        fetch('./faculties.JSON')
        .then(res => res.json())
        .then(data => setfaculties(data))
      },[])

    return (
       
           <div className="card-container mt-5 pt-5 ms-5 ">
                {
                   faculties.map(faculty => <Faculties
                   faculty ={faculty}
                   ></Faculties>) 
                }
           
        </div>
    );
};

export default Services;