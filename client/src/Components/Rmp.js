import React, { Component } from 'react'
import Search from './Search'
import axios from 'axios';

class Rmp extends Component {
    constructor(props) {
        super(props);
        this.state = {tid:''};
    }
    
// async componentDidMount(){
//     axios.get(`http://localhost:9000/data`)
//     .then(res => {
//         console.log(res.data)
//         const json = res.data;
//         this.setState({tid: json.tid, show: true});
//         console.log(tid)
//     })
// }

    render() {       
        return (
            <div className = "RMP">
               
            </div>
        )
    }
}

export default Rmp;