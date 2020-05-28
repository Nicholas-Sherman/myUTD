import React from 'react';
import './App.css';
import Search from './Components/Search';
import Page from './Components/Review/Page';

function App() {
  return (
    <div className="Title">
        <h1>
          myUTD
        </h1>
          <p>
            Tool to find professor reviews and grade distributions.
          </p>
        <Search /> <br></br>
        <h3>
          Rate out of 5
        </h3>
    </div>
  );
}

export default App;
