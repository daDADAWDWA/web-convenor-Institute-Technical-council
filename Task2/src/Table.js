import React from 'react';
import './Table.css'; // Import CSS file for styles

const Table = ({ data }) => {
  return (
    <div className="table-container">
           <h1 style={{ color: 'blue' }}>Table Page</h1>
      <table>
        <thead>
          <tr>
            <th>scroll no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Address</th>
            <th>LinkedIn</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td>{item.address}</td>
              <td>{item.linkedin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
