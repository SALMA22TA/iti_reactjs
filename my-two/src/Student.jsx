import React from 'react';
import './Styles.css';

const Student = ({ data }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {data.map((student) => (
          <li key={student.id}>
            {student.name} - Age: {student.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Student;
