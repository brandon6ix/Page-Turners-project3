import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../graphql/mutations';
import { useParams, Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [register, { data, loading, error }] = useMutation(REGISTER_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await register({ variables: { ...formData } });
      localStorage.setItem('token', data.register.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">Signup</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default Signup;
