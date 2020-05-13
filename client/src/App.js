import React from 'react';
import './App.css';
import Search from './Components/Search';

function App() {
  return (
    <div className="Title">
        <h1>
          myUTD
        </h1>
          <p>
            Tool to find professor reviews and grade distributions.
          </p>
        <Search /> 
    </div>
  );
}

export default App;
