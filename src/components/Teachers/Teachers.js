import React, { useEffect, useState } from 'react';
import Lecturer from '../Lecturer/Lecturer';
import './teachers.css'

const Teachers = () => {
const [teachers ,setTeachers] = useState([])
    useEffect(()=>{
        fetch('./teacher.JSON')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[])

    return (
        <div className="mt-5 teacher-card">
            {
                teachers.map(teacher => <Lecturer
                 teacher={teacher}
                ></Lecturer>)
            }
        </div>
    );
};

export default Teachers;