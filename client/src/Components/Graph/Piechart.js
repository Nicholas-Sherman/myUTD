import React, { Component } from 'react'
import CanvasJSReact from './canvasjs.react';
import axios from 'axios';
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Piechart extends Component {
  constructor(props) {
	super(props);
	this.state = {professor: props.professor, checkagain: 0, Ap: 0,A: 0,Am: 0,
	Bp: 0,B:0, Bm: 0,
	Cp: 0,C: 0,Cm: 0,
	Dp: 0, D: 0,W: 0,F: 0}
  }
  
	async componentDidMount(){
		axios.get(`http://localhost:9000/testapi`)
		.then(res => {
			const temp = res.data;
			const fall = temp[0];
			const spring = temp[1];
			const summer = temp[2];
			console.log(fall,spring,summer)
			//sets state for fall
			this.setState({fallAp: fall.Ap,fallA: fall.A,fallAm: fall.Am,
				fallBp: fall.Bp,fallB:fall.B, fallBm: fall.Bm,
				fallCp: fall.Cp,fallC: fall.C,fallCm: fall.Cm,
				fallDp: fall.Dp, fallD: fall.D,fallW: fall.W,fallF: fall.F});

			//sets state for spring
			this.setState({springAp: spring.Ap,springA: spring.A,springAm: spring.Am,
				springBp: spring.Bp,springB:spring.B, springBm: spring.Bm,
				springCp: spring.Cp,springC: spring.C,springCm: spring.Cm,
				springDp: spring.Dp, springD: spring.D,springW: spring.W,springF: spring.F})

			//sets state for spring
			this.setState({summerAp: summer.Ap,summerA: summer.A,summerAm: summer.Am,
			summerBp: summer.Bp,summerB:summer.B, summerBm: summer.Bm,
			summerCp: summer.Cp,summerC: summer.C,summerCm: summer.Cm,
			summerDp: summer.Dp, summerD: summer.D,summerW: summer.W,summerF: summer.F})
		})
							
	};

	render() {
		const optionsFall = {
			axisX:{
				interval: 1,
			  },
			title: {
				text: "Fall"
			},
			data: [{

				type: "column",
				dataPoints:[
				{ y: this.state.fallAp, label: "A+"},
				{ y: this.state.fallA, label: "A" },
				{ y: this.state.fallAm, label: "A-" },

				{ y: this.state.fallBp, label: "B+" },
				{ y: this.state.fallB, label: "B" },
				{ y: this.state.fallBm, label: "B-" },

				{ y: this.state.fallCp, label: "C+" },
				{ y: this.state.fallC, label: "C" },
				{ y: this.state.fallCm, label: "C-" },

				{ y: this.state.fallDp, label: "D+" },
				{ y: this.state.fallD, label: "D" },
				{ y: this.state.fallF, label: "F" },
				{ y: this.state.fallW, label: "W" },
			]
		}]
		}

		const optionsSpring = {
			axisX:{
				interval: 1,
			  },
			title: {
				text: "Spring"
			},
			data: [{

				type: "column",
				dataPoints:[
				{ y: this.state.springAp, label: "A+"},
				{ y: this.state.springA, label: "A" },
				{ y: this.state.springAm, label: "A-" },

				{ y: this.state.springBp, label: "B+" },
				{ y: this.state.springB, label: "B" },
				{ y: this.state.springBm, label: "B-" },

				{ y: this.state.springCp, label: "C+" },
				{ y: this.state.springC, label: "C" },
				{ y: this.state.springCm, label: "C-" },

				{ y: this.state.springDp, label: "D+" },
				{ y: this.state.springD, label: "D" },
				{ y: this.state.springF, label: "F" },
				{ y: this.state.springW, label: "W" },
			]
		}]
		}
		const optionsSummer = {
			axisX:{
				interval: 1,
			  },
			title: {
				text: "Summer"
			},
			data: [{

				type: "column",
				dataPoints:[
				{ y: this.state.summerAp, label: "A+"},
				{ y: this.state.summerA, label: "A" },
				{ y: this.state.summerAm, label: "A-" },

				{ y: this.state.summerBp, label: "B+" },
				{ y: this.state.summerB, label: "B" },
				{ y: this.state.summerBm, label: "B-" },

				{ y: this.state.summerCp, label: "C+" },
				{ y: this.state.summerC, label: "C" },
				{ y: this.state.summerCm, label: "C-" },

				{ y: this.state.summerDp, label: "D+" },
				{ y: this.state.summerD, label: "D" },
				{ y: this.state.summerF, label: "F" },
				{ y: this.state.summerW, label: "W" },
			]
		}]
		}
		return (
		<div>
			<CanvasJSChart options = {optionsFall} />
			<CanvasJSChart options = {optionsSpring} />
			<CanvasJSChart options = {optionsSummer} />

		</div>
		);
	}
}
export default Piechart;