import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './Form'; // Import directly from the same directory
import Table from './Table'; // Import directly from the same directory

const App = () => {
  const [formDataList, setFormDataList] = useState([]);

  const handleSubmit = (formData) => {
    setFormDataList((prevList) => [...prevList, formData]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" style={{ color: 'black' }}>Form</Link>
            </li>
            <li>
              <Link to="/table" style={{ color: 'black' }}>Table</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<Form onSubmit={handleSubmit} />}
          />
          <Route
            path="/table"
            element={<Table data={formDataList} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
