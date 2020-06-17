import React, { Component } from 'react'
import Iframe from 'react-iframe'
import Popup from 'reactjs-popup'
import axios from 'axios'
class Rmp extends Component {
    constructor(props) {
        super(props);
        this.state = {tid: '', show: false};
    }
    
async componentDidMount(){
    try{
    axios.get(`http://localhost:9000/data`)
    .then(res => {
        console.log(res.data[0])
        this.setState({tid: res.data[0], show: true})
    })
  }
  catch(e)
  {
    console.log(e)
  }
                        
};
    render() {       
        const { show } = this.state
        return (
            <div>
                { show ?
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
                : null}
            </div>
        )
    }
}

export default Rmp;