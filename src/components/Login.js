import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [typingHeader, setTypingHeader] = useState('');
  //const [typingUsername, setTypingUsername] = useState(false);
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

  const typeWritingPortfolio = () => {
    const text = "Writing Portfolio";
    let currentIndex = 0;
  
    intervalIdRef.current = setInterval(() => {
      if (currentIndex < (text.length - 1)) {
        setTypingHeader((prev) => {
          const updatedHeader = prev + text[currentIndex];
          console.log("Updated Header:", updatedHeader);
          return updatedHeader;
        });
        currentIndex++;
      } else {
        clearInterval(intervalIdRef.current);
        setTimeout(backspaceWritingPortfolio, 1000);
      }
    }, 100);
  };
  
  const backspaceWritingPortfolio = () => {
    let text = "Writing Portfolio";
    let currentIndex = text.length;
  
    intervalIdRef.current = setInterval(() => {
      if (currentIndex > 0) {
        setTypingHeader((prev) => {
          const updatedHeader = prev.slice(0, currentIndex - 1);
          console.log("Updated Header:", updatedHeader);
          return updatedHeader;
        });
        currentIndex--;
      } else {
        clearInterval(intervalIdRef.current);
        setTypingHeader(''); // Clear the typingHeader after backspace
      }
    }, 100);
  };
  
  useEffect(() => {
    typeWritingPortfolio();
    return () => clearInterval(intervalIdRef.current); // Clear the interval on component unmount
  }, [/* add dependencies here if needed */]);
  

  return (
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
  );
};

export default Login;
