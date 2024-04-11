import React, { useState } from 'react';
import './Form.css'; // Import CSS file for styles

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    contact: '', 
    address: '', 
    linkedin: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ 
      name: '', 
      email: '', 
      contact: '', 
      address: '', 
      linkedin: '' 
    });
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <h1 style={{ color: 'blue' }}>Form Page</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
            />
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
