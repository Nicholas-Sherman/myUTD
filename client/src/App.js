import React from 'react';
import './App.css';
import Search from './Components/Search';
import Page from './Components/Review/Page';
import Ratings from './Components/Review/Ratings'

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
        <Ratings />
    </div>
  );
}

export default App;
