import React, { Component } from 'react'
import CanvasJSReact from './canvasjs.react';
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Piechart extends Component {
  constructor(props) {
    super(props);
	this.state = {professor: props.professor}
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
  
	render() {
		const options = {
			axisX:{
				interval: 1,
			  },
			title: {
				text: "Basic Column Chart"
			},
			data: [{

				type: "column",
				dataPoints:[
				{ y: this.state.Ap, label: "A+"},
				{ y: this.state.A, label: "A" },
				{ y: this.state.Am, label: "A-" },

				{ y: this.state.Bp, label: "B+" },
				{ y: this.state.B, label: "B" },
				{ y: this.state.Bm, label: "B-" },

				{ y: this.state.Cp, label: "C+" },
				{ y: this.state.C, label: "C" },
				{ y: this.state.Cm, label: "C-" },

				{ y: this.state.Dp, label: "D+" },
				{ y: this.state.D, label: "D" },
				{ y: this.state.F, label: "F" },
				{ y: this.state.W, label: "W" },
			]
		}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default Piechart;