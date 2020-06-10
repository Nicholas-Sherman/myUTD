import React, { Component } from 'react'
import CanvasJSReact from './canvasjs.react';
import axios from 'axios';
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Piechart extends Component {
  constructor(props) {
    super(props);
	this.state = {professor: props.professor, show: false}
  }
  
	async componentDidMount(){
		axios.get(`http://localhost:9000/testapi`)
		.then(res => {
			const json = res.data;
			this.setState({Ap: json.Ap,A: json.A,Am: json.Am,
				Bp: json.Bp,B:json.B, Bm: json.Bm,
				Cp: json.Cp,C: json.C,Cm: json.Cm,
				Dp: json.Dp, D: json.D,W: json.W,F: json.F, show: true});
		})
	};
	render() {
		const options = {
			axisX:{
				interval: 1,
			  },
			title: {
				text: this.state.professor
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
				onRef={ref => this.chart = ref} />
			
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/
			
			}
		</div>
		);
	}
}
export default Piechart;