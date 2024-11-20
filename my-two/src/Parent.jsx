import React, { useState } from 'react';
import Search from './Search';
import Student from './Student';
import './Styles.css';

const Parent = () => {
  const originalData = [
    { id: 1, name: 'Ahmed', age: 25 },
    { id: 2, name: 'Omar', age: 20 },
    { id: 3, name: 'Sarah', age: 22 },
    { id: 4, name: 'Eid', age: 23 },
    { id: 5, name: 'Hamza', age: 28 },
    { id: 6, name: 'Aya', age: 32 }
  ];

  const [filteredData, setFilteredData] = useState(originalData);

  const handleSearch = (query) => {
    const filtered = originalData.filter(student =>
      student.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="container">
      <h1>Student Search App</h1>
      <Search onSearch={handleSearch} />
      <Student data={filteredData} />
    </div>
  );
};

export default Parent;
