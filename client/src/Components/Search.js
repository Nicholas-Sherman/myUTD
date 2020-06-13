import React, { Component } from 'react'
import './Search.css';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {input: '',tid: '', appear: false, name: ''};
    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.myRef = React.createRef();
  }

  handleInput = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:9000/professorsList',{input: this.state.input})
   axios.delete('http://localhost:9000/testapi')
    axios.post('http://localhost:9000/data',{name: this.state.input})
    .then(res => {
      this.setState({tid: res.data})
      this.props.setTid(this.state.tid)
    })
  }

  handleChange(event)
  {
    this.setState({input: event.target.value});
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleInput}>
          <label>
           <input className= "search-bar"
            type="text"
            ref={this.myRef}
            placeholder="Search your professor"
            value={this.state.input}
            onChange={this.handleChange}/>
           </label>
        </form>

      </div>
    );
    
  }
}

export default Search;