import React from 'react';
import './App.css';
import Search from './Components/Search';
import Page from './Components/Review/Page';
import Ratings from './Components/Review/Ratings';
import Tags from './Components/Review/Tags';

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
        <Ratings />
        <h3>
          Select up to 5 tags that describe your professor
        </h3>
        <Tags />
    </div>
  );
}

export default App;
