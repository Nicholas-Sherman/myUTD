import React, { Component } from 'react'
import './Search.css';
import Piechart from './Graph/Piechart';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {input: '', appear: false, name: ''};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.myRef = React.createRef();
  }
  handleClick = async () => {
    const response = await fetch('http://localhost:9000/testapi', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.input
      })
    });
    this.setState({name: this.state.input})
  }
 /* handleClick(event)
  {
    fetch('http://localhost:9000/testapi', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.input
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
    this.setState({name: this.state.input})
  }*/

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
    <Piechart professor={this.state.name}/>
      </div>
    );
    
  }
}

export default Search;