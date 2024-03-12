import React from 'react';
import '../styles/bio.css';

const Bio = () => (
    <div className="container" data-testid="bio-component">
        <header>
            <h1>About Dominic</h1>
        </header>
        <p>
            This is a little bit about Dominic. 
        </p>
        <footer>
            &copy; 2024 Fresh Juice Stuido
        </footer>
    </div>
);

export default Bio;