import React from 'react';
import './App.css';
import Search from './Components/Search';
import Rmp from './Components/Rmp'
import Piechart from './Components/Graph/Piechart';
import DropdownList from './Components/DropdownList';


class App extends React.Component{

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
        <DropdownList />
        <div className= "Popup">
          <Rmp />
        </div><br></br>
        <Piechart />
    </div>
  );
  }
}


export default App;