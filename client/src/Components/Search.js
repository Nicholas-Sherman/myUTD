import React, { Component } from 'react'
import './Search.css';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {input: '', appear: false, name: ''};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.myRef = React.createRef();
  }
  handleClick = async () => {
    axios.post('http://localhost:9000/professorsList',{input: this.state.input})
   axios.delete('http://localhost:9000/testapi')
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
    <input type="submit"  value="Submit" />
    </form>


      </div>
    );
    
  }
}

export default Search;