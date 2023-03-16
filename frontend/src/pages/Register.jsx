import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:4000/register',
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(data);
      if (data) {
        if (data.errors) {
        } else {
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='container'>
      <h2>Register Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
        <span>
          Already have an account?<Link to='/login'>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
