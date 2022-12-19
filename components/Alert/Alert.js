import React, { Component } from 'react'
import './Alert.css'
import alertlogo from './assets/alert.gif'
import ticklogo from './assets/tick.gif'
import PlayAlert from './PlayAlert/PlayAlert'
export default class Alert extends Component {
    state = {
        alertImg: 0,
        playedSound: 0,
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.alertImg !== prevState.alertImg) {
            var alertImg = this.props.alertImg;
            this.setState({
                alertImg: alertImg,
                playedSound:0
            })
        }
    }
    resetAlarm() {
        this.setState({
            playedSound: 1,
            alertImg:0
        })
        // this.props.resetAlarm();
    }
    render() {
        //   if (this.state.alertImg == 1) {
        //       return (
        //           <PlayAlert></PlayAlert>
        //       )
        //   }
        return (
            <div id="Alert-container">
                <button id="reset-button" class="btn btn-primary" onClick={() => { this.resetAlarm() }}>Reset</button>
                <div id="alert-Container-inner">
                    {/* {this.state.alertImg == 1 ? (
                       
                    ) : (
                       
                    )
                    } */}
                    {/* {this.state.alertImg==1 && this.state.playedSound==0?(
                    <PlayAlert></PlayAlert>
                ):(<div/>)} */}
                {
                    this.state.playedSound==0 && this.state.alertImg==1?(<PlayAlert></PlayAlert>):(<div/>)
                }
                    {(() => {
                        if (this.state.alertImg == 1){
                            console.log("yooo")
                            return (<img style={{ "width": "25%" }} src={alertlogo} alt="loading..." />)
                        }
                        if (this.state.alertImg ==0){
                            return <img style={{ "max-width": "25%" }} src={ticklogo} alt="loading..." />
                        }
                        
                    })()}
                </div>
            </div>
        )
    }
}
