import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginWritingPortfolioTransitions from '../assets/LPWPortfolio.mp4';
import '../styles/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [typingHeader, setTypingHeader] = useState('');
  const navigate = useNavigate();

  const intervalIdRef = useRef(null);

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

  const typeHeaderWithBackspace = (input) => {
    return new Promise((resolve) => {
      let currentIndex = 0;

      intervalIdRef.current = setInterval(() => {
        if (currentIndex < input.length - 1) {
          setTypingHeader((prev) => prev + input[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(intervalIdRef.current);
          setTimeout(() => {
            backspaceHeader(input);
            resolve(); // Resolve the promise after backspace
          }, 1000);
        }
      }, 100);
    });
  };

  const typeHeaderWithoutBackspace = (input) => {
    return new Promise((resolve) => {
      let currentIndex = 0;

      intervalIdRef.current = setInterval(() => {
        if (currentIndex < input.length - 1) {
          setTypingHeader((prev) => prev + input[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(intervalIdRef.current);
          resolve(); // Resolve the promise when typing is complete
        }
      }, 100);
    });
  };

  const backspaceHeader = (input) => {
    let currentIndex = input.length;

    intervalIdRef.current = setInterval(() => {
      if (currentIndex > 0) {
        setTypingHeader((prev) => prev.slice(0, currentIndex - 1));
        currentIndex--;
      } else {
        clearInterval(intervalIdRef.current);
        setTypingHeader(''); // Clear typingHeader after backspace
      }
    }, 100);
  };

  useEffect(() => {
    const runEffects = async () => {
      await typeHeaderWithBackspace("Wrriting Portfolio");
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Delay for 1 second
      await typeHeaderWithoutBackspace("Loogin");
    };

    runEffects();

    return () => {
      clearInterval(intervalIdRef.current);
      setTypingHeader(''); // Clear typingHeader on component unmount
    };
  }, []);

  return (
    <div className='root'>
      <video className="background-video" src={LoginWritingPortfolioTransitions} autoPlay loop muted />
      <div className="login-container" data-testid="login-component">
        <form>
          <h2>
            <span className="typing-animation" style={{ whiteSpace: 'pre-line' }}>{typingHeader}</span>
          </h2>
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
    </div>
  );
};

export default Login;
