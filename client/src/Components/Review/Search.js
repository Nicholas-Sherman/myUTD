import React, { Component } from 'react'
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

handleChange(e) {
  this.setState({input: e.target.value});
}

search(e) {
  e.preventDefault();
  this.props.handleInput(this.state);
}

  render() {
    return (
      <div className="search">
        <form onSubmit={this.search}>
          <input className= "search-bar"
            type="text" 
            placeholder="Search your professor"
            value={this.state.input}
            onChange={this.handleChange}
            on
          />
        </form>
      </div>
    );
  }
}

export default Search;