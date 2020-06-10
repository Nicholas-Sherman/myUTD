import React, { Component } from 'react'
import Search from './Search'
import axios from 'axios';

class Rmp extends Component {
    constructor(props) {
        super(props);
        this.state = {prof: '', tid:''};
        this.handleInput = this.handleInput.bind(this);
    }
    
    handleInput(input) {
        this.setState({prof: input});
        axios.post('http://localhost:9000/name', {professor: this.prof})
        .then (function(response) {
            console.log(response)
        })
    }

    render() {       
        return (
            <div className = "RMP">
                <Search handleInput={this.handleInput}/>
            </div>
        )
    }
}

export default Rmp;