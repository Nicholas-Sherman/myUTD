import React, { Component } from 'react'
import Iframe from 'react-iframe'
import Popup from 'reactjs-popup'

class Rmp extends Component {
    constructor(props) {
        super(props);
        this.state = {tid: ''};
    }
    
componentDidUpdate(prevProps) {
    if (this.props.tid !== prevProps.tid) {
        this.setState({tid: this.props.tid})
    }
}

    render() {       
        return (
            <div className = "rmp">
            <Popup trigger={<button className ="popup">Rate My Professor</button>}
             position="right">
                 <div className = "rmp-button">
                    <Iframe
                    url = {"https://www.ratemyprofessors.com/ShowRatings.jsp?tid=" + this.state.tid}
                    height = "800px"
                    width = "670px"
                    position = "relative"
                    className = "rmp-frame">
                    </Iframe>
                 </div>
             </Popup>
            </div>
        )
    }
}

export default Rmp;