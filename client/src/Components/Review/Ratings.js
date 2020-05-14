import React, { Component } from 'react'
import './Ratings.css'
import { FaStar } from "react-icons/fa"

class Ratings extends Component {
    constructor(props) {
        super(props)
        this.state = {selectedOption: "1"};
        this.optionChange = this.optionChange.bind(this);
    }

optionChange(event) {
    this.setState({selectedOption: event.target.value});
}
    
render () {
    return (
        <div className = "ratings">
            <p>
                Rate out of 5
            </p>
            <input 
                class = "all-ratings" 
                type = "radio" 
                id = "rating1" 
                value = "1" 
                checked={this.state.selectedOption == "1"}
                onChange={this.optionChange}
            />
                <label for="rating1"><FaStar size = "37px"/>Awful</label>
            <input 
            class = "all-ratings" 
            type = "radio" 
            id = "rating2" 
            value = "2" 
            checked={this.state.selectedOption == "2"} 
            onChange={this.optionChange}
            />
                <label for="rating2"><FaStar size = "37px"/>Poor</label>
            <input 
            class = "all-ratings" 
            type = "radio" 
            id = "rating3" 
            value = "3" 
            checked={this.state.selectedOption == "3"} 
            onChange={this.optionChange}
            />
                <label for="rating3"><FaStar size = "37px"/>Fair</label>
            <input 
            class = "all-ratings" 
            type = "radio" 
            id = "rating4" 
            value = "4" 
            checked={this.state.selectedOption == "4"}
            onChange={this.optionChange}
            />
                <label for="rating4"><FaStar size = "37px"/>Good</label>
            <input 
            class = "all-ratings" 
            type = "radio" 
            id = "rating5" 
            value = "5" 
            checked={this.state.selectedOption == "5"} 
            onChange={this.optionChange}
            />
                <label for="rating5"><FaStar size = "37px"/>Great</label>
        </div>
)}

}

export default Ratings;