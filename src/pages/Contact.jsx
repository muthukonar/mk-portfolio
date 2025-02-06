import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  return (
    <section id="contact" className="container my-5 col-12 col-md-6 mb-4">
      <h2 className="text-center mb-4">Contact</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3"  >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="form-control"
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="form-control"
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>

        {/* Message */}
        <div className="mb-3">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="form-control"
            rows="4"
          />
          {errors.message && <small className="text-danger">{errors.message}</small>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
