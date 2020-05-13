import React, { Component } from 'react'
import './Search.css';

class Search extends Component {
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
      <div className="search">
        <input className= "search-bar"
          type="text" 
          placeholder="Search your professor"
          value={this.state.input}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Search;