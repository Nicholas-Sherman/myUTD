import React, { Component } from 'react'
import './Search.css';
import Piechart from './Graph/Piechart';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {input: '', appear: false, name: ''};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.myRef = React.createRef();
  }
  handleClick = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:9000/testapi',{name: this.state.input})
    this.props.handleInput(this.state);
    this.setState({name: this.state.input})
  }

  handleChange(event)
  {
    this.setState({input: event.target.value});
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleClick}>
          <label>
        <input className= "search-bar"
          type="text"
          ref={this.myRef}
          placeholder="Search your professor"
        value={this.state.input}
         onChange={this.handleChange}
        />
        </label>
    </form>
      </div>
    );
    
  }
}

export default Search;