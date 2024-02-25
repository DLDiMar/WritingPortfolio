import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'; // Import the login.css file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate a successful login (replace this with your actual authentication logic)
    if (username && password) {
      // Redirect to the home page on successful login
      navigate('/home');
    } else {
      // Handle unsuccessful login (e.g., show an error message)
      console.error('Invalid credentials');
    }
  };

  return (
    <div className="login-container" data-testid="login-component"> {/* Apply a class for styling */}
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
