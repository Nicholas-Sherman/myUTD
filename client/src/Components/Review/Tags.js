import React, { Component } from 'react'
import './Tags.css'

class Tags extends Component {
    render () {
        return (
            <div className = "tags">
            <ul class = "checkboxes">
                <li>
                    <input 
                        type = "checkbox"
                        id = "tag1"
                        value = "Test Heavy"/>
                    <label for = "tag1">Test Heavy</label>
                </li>
                <li>
                    <input 
                    type = "checkbox"
                    id = "tag2"
                    value = "homeworkheavy"/>
                <label for = "tag2">Homework Heavy</label>
                </li>
                <li>
                    <input 
                        type = "checkbox"
                        id = "tag3"
                        value = "extracredit"/>
                    <label for = "tag3">Extra Credit</label>
                </li>
                <li>
                    <input 
                        type = "checkbox"
                        id = "tag4"
                        value = "attendancerequired"
                    />
                        <label for = "tag4">Attendance Required</label>
                </li>
                </ul>
            </div>
        )
    };
}

export default Tags;