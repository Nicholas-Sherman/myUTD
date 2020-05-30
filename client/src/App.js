import React from 'react';
import './App.css';
import Rmp from './Components/Review/Rmp';
import Piechart from './Components/Piechart';

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
        <Rmp /> <br></br>
        <Piechart professor="henry" Ap = {this.state.Ap} A = {this.state.A} Am = {this.state.Am} 
                                    Bp = {this.state.Bp} B = {this.state.B} Bm = {this.state.Bm} 
                                    Cp = {this.state.Cp} C = {this.state.C} Cm = {this.state.Cm} 
                                    Dp = {this.state.Dp} D = {this.state.D} F = {this.state.F} W = {this.state.W} />
    </div>
  );
  }
}


export default App;