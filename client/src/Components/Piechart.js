import React, { Component } from 'react'
import CanvasJSReact from './canvasjs.react';
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Piechart extends Component {
  constructor(props) {
    super(props);
	this.state = {professor: props.professor,Ap: props.Ap,A: props.A,Am: props.Am,Bp: props.Bp,B: 
		props.B,Cp: props.Cp,C: props.C,Cm: props.Cm,D: props.D,W: props.W,F: props.F}
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
				{ y: this.props.Ap, label: "A+"},
				{ y: this.props.A, label: "A" },
				{ y: this.props.Am, label: "A-" },

				{ y: this.props.Bp, label: "B+" },
				{ y: this.props.B, label: "B" },
				{ y: this.props.Bm, label: "B-" },

				{ y: this.props.Cp, label: "C+" },
				{ y: this.props.C, label: "C" },
				{ y: this.props.Cm, label: "C-" },

				{ y: this.props.Dp, label: "D+" },
				{ y: this.props.D, label: "D" },
				{ y: this.props.F, label: "F" },
				{ y: this.props.W, label: "W" },
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