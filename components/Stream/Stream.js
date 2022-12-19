import React, { Component } from 'react'
import Webcam from "react-webcam";
import './Stream.css'

export default class Stream extends Component {
    constructor(props) {
        super(props);
        this.streamCamVideo = this.streamCamVideo.bind(this)
    }
    streamCamVideo() {
        var constraints = { audio: true, video: { width: 1280, height: 720 } };
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (mediaStream) {
                console.log(mediaStream)
                var video = document.querySelector("video");

                video.srcObject = mediaStream;
                video.onloadedmetadata = function (e) {
                    video.play();
                };
            })
            .catch(function (err) {
                console.log(err.name + ": " + err.message);
            }); // always check for errors at the end.
    }
  render() {
      const videoConstraints = {
          width: 600,
          height: 400,
          facingMode: "forward"
      };

    return (
            <div id="container">
                <div id="stream-text">Live Stream from Remote Camera</div>
                <Webcam videoConstraints={videoConstraints} audio={false}/>
                {/* <video autoPlay={true} id="videoElement" controls></video> */}
                {/* <button id="start-streaming-button" class="btn btn-primary"onClick={this.streamCamVideo}>Start streaming</button> */}
            </div>
    )
  }
}
