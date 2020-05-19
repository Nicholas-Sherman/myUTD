import React from 'react';
import './App.css';
import Search from './Components/Search';
import Piechart from './Components/Piechart';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }
callAPI(){
  fetch("http://localhost:9000/testapi")
  .then(res => res.json())
  .then(res => this.setState({Ap: res[7].Ap,A: res[7].A,Am: res[7].Am,
                              Bp: res[7].Bp,B:res[7].B, Bm: res[7].Bm,
                              Cp: res[7].Cp,C: res[7].C,Cm: res[7].Cm,
                              Dp: res[7].Dp, D: res[7].D,W: res[7].W_Total,F: res[7].F}));
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
        <Search /> 
        <Piechart professor="henry" Ap = {this.state.Ap} A = {this.state.A} Am = {this.state.Am} 
                                    Bp = {this.state.Bp} B = {this.state.B} Bm = {this.state.Bm} 
                                    Cp = {this.state.Cp} C = {this.state.C} Cm = {this.state.Cm} 
                                    Dp = {this.state.Dp} D = {this.state.D} F = {this.state.F} W = {this.state.W} />     
    </div>
  );
  }
}


export default App;