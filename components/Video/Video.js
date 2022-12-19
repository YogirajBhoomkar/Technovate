import React, { Component } from 'react'
import './Video.css'
import loading from './assets/loading.png'
import axios from 'axios';
// import detection_video from './detections/2.mp4';
export default class Video extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        loading_img: loading,
        statusCode: 101,
        fileFound: true
    }
    componentDidMount() {

    }

    render() {
        var fileFound=0
        try {
            var file = require(process.env.REACT_APP_DETECTIONS_FILE_PATH)
            fileFound=1
            // this.setState({
            //     fileFound: true
            // })
        } catch (error) {
            fileFound=0
            // this.setState({
            //     fileFound: false
            // })
        }

        return (
            <div id="video-container">
                <div id="recent-detected-videos">Recent Detected Video {this.state.fileFound}</div>
                
                {/* {(() => {
                    if (this.state.fileFound == true) {
                        return ()
                    }
                    else {
                        return (<img src={loading}/>)
                    }
                })()} */}
                {fileFound == 1 ? (<video src={file} width="400" height="240" controls ></video>) : (<img src={loading} ></img>)}
                
            </div>
        )
    }
}