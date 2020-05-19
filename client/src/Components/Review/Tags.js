import React, { Component } from 'react'
import './Tags.css'

class Tags extends Component {
    constructor(props) {
        super(props)
        this.state = { Data: [] }
        this.handleChange = this.handleChange.bind(this);

    }

handleChange(event) {
    var val = event.target.value; 

    if (event.target.checked) {
        this.state.Data.concat(val);
    }
    else {
        this.state.Data.splice(val, 1);
    }

}

render () {
    return (
        <div className = "tags">
        <ul class = "checkboxes">
            <li>
                <input 
                    type = "checkbox"
                    id = "tag1"
                    value = "Test Heavy"
                    onChange = {this.handleChange}/>
                <label for = "tag1">Test Heavy</label>
            </li>
            <li>
                <input 
                type = "checkbox"
                id = "tag2"
                value = "homeworkheavy"
                onChange = {this.handleChange}/>
            <label for = "tag2">Homework Heavy</label>
            </li>
            <li>
                <input 
                    type = "checkbox"
                    id = "tag3"
                    value = "extracredit"
                    onChange = {this.handleChange}/>
                <label for = "tag3">Extra Credit</label>
            </li>
            <li>
                <input 
                    type = "checkbox"
                    id = "tag4"
                    value = "attendancerequired"
                    onChange = {this.handleChange}/>
                    <label for = "tag4">Attendance Required</label>
            </li>
            </ul>
        </div>
    )
    };
}

export default Tags;