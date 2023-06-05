import React, { useState } from 'react';

import style from '../Authentification/login.module.scss'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleLogin = () => {
    // Perform authentication here, e.g., by sending username and password to a server-side API

    // Mock authentication for demonstration purposes
    if (username === 'admin' && password === 'password') {
      // Successful login
      setError('');
      setAttempts(0);
      // Redirect to the authenticated section of the application
      // You can use react-router or other navigation methods for this
      // Example: history.push('/dashboard');
    } else {
      // Incorrect credentials
      setError('Invalid username or password');
      setAttempts(attempts + 1);
      if (attempts === 4) {
        // Account locked after five unsuccessful login attempts
        setError('Account locked. Please contact support to unlock.');
      }
    }
  };

  return (
    <div className={style.container}>
      <div className={style.form}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Login;


