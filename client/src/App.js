import React from 'react';
import './App.css';
import Search from './Components/Search';
import Rmp from './Components/Rmp'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:'', tid: ''};
    this.setTid=this.setTid.bind(this);
  }

  setTid = (tid) => {
    this.setState({tid: tid})
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
        <Search setTid={this.setTid}/> <br></br>
        <div className= "Popup">
          <Rmp tid={this.state.tid}/>
        </div>
    </div>
  );
  }
}


export default App;