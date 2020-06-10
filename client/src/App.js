import React from 'react';
import './App.css';
import Rmp from './Components/Rmp';


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
        <Rmp /> <br></br>
    </div>
  );
  }
}


export default App;