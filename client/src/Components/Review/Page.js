import React, { Component } from 'react'
import './Page.css'

class Page extends Component {
    constructor(props) {
      super(props);
      this.state = {input: ''};
      this.handleChange = this.handleChange.bind(this);
    }

handleChange(event) {
    this.setState({input: event.target.value});
    }

render() {
    return (
        <div className="crsno">
            <label>Enter Professor's Course Number</label><br></br>
            <input className= "crs-no"
              type="text" 
              value={this.state.input}
              onChange={this.handleChange}
            />
        </div>
    
    )}
};

export default Page;