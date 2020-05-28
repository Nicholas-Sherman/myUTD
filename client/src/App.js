import React from 'react';
import './App.css';
import Search from './Components/Search';
<<<<<<< HEAD
import Page from './Components/Review/Page';
=======
import Piechart from './Components/Piechart';
>>>>>>> 2a5265ff8b6ac61a4c16eadba7357c846c060c42

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }
callAPI(){
  fetch("http://localhost:9000/testapi")
  .then(res => res.json())
  .then(res => this.setState({Ap: res.Ap,A: res.A,Am: res.Am,
                              Bp: res.Bp,B:res.B, Bm: res.Bm,
                              Cp: res.Cp,C: res.C,Cm: res.Cm,
                              Dp: res.Dp, D: res.D,W: res.W,F: res.F}));
}
  componentWillMount(){
    this.callAPI();
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
<<<<<<< HEAD
        <h3>
          Rate out of 5
        </h3>
=======
        <Piechart professor="henry" Ap = {this.state.Ap} A = {this.state.A} Am = {this.state.Am} 
                                    Bp = {this.state.Bp} B = {this.state.B} Bm = {this.state.Bm} 
                                    Cp = {this.state.Cp} C = {this.state.C} Cm = {this.state.Cm} 
                                    Dp = {this.state.Dp} D = {this.state.D} F = {this.state.F} W = {this.state.W} />     
>>>>>>> 2a5265ff8b6ac61a4c16eadba7357c846c060c42
    </div>
  );
  }
}


export default App;