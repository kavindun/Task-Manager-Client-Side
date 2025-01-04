import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    console.log("2");
    e.preventDefault();
    try {
      console.log("Hi")
      const response = await axios.post('http://localhost:3000/users/login', { email, password });
      console.log(response);
      localStorage.setItem('token', response.data.token); // Save token in localStorage
      navigate('/dashboard'); // Navigate to dashboard
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid credentials');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{''}
        <Link to="/register" className="link">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default Login;
