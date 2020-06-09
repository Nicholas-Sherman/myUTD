import React from 'react';
import './App.css';
import Search from './Components/Search';

import Ratings from './Components/Review/Ratings';
import Tags from './Components/Review/Tags';

import Piechart from './Components/Piechart';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }

  render(){
  return (
    <div className="Title">
        <h1>
          myUTD
        </h1>
          <p>
            Tool to find professor reviews and grade distributions.
          </p>
        <Search /> <br></br>
    </div>
  );
  }
}


export default App;