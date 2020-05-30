import React, { Component } from 'react'
import Search from './Search'

class Rmp extends Component {
    constructor(props) {
        super(props);
        this.state = {prof: ''};
        this.handleInput = this.handleInput.bind(this);
    }
    
    handleInput(input) {
        this.setState({prof: input});
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