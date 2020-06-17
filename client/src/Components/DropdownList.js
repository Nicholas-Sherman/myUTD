import React, { Component } from 'react'
import axios from 'axios';
import './DropdownList.css';

class DropdownList extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.myRef = React.createRef();
    this.state = {list: [], sub: null, cat: null};
  }
  async componentDidMount(){
    try{
    axios.get(`http://localhost:9000/professorsList`,{params:{results: 1,inc: "array"}})
    .then(res => {
        this.setState({sub: res.data[1],cat: res.data[2],list: res.data[0]})
    })
  }
  catch(e)
  {
    console.log(e)
  }
                        
};
handleChange(event){
  axios.post('http://localhost:9000/testapi',{name: event.target.value,sub: this.state.sub,cat: this.state.cat})
  axios.post('http://localhost:9000/data',{name: event.target.value})
  window.location.reload(false);
}
  render() {
    return (
      <div class ="scroll">
          {this.state.list.map(teachers => 
              <button type="button" title={teachers} value={teachers} onClick={this.handleChange}>{teachers} </button>
          )}
      </div>
    );
    
  }
}

export default DropdownList;