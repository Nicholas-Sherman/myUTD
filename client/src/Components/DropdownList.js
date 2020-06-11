import React, { Component } from 'react'
import axios from 'axios';

class DropdownList extends Component {
  constructor(props) {
    super(props);
    this.state = {list: [], sub: null, cat: null};
    //this.handleClick = this.handleClick.bind(this);
   // this.handleChange = this.handleChange.bind(this);
    //this.myRef = React.createRef();
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

  render() {
    return (
      <div>
        <select name="cars" id="cars">
          {this.state.list.map(teachers => 
            <option key = {teachers} value ={teachers}>{teachers}</option>
          )}
        </select>
      </div>
    );
    
  }
}

export default DropdownList;