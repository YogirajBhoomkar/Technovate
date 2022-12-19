import logo from './logo.svg';
import './App.css';
import Stream from './components/Stream/Stream';
import xorv from './assets/logo.png'
import Alert from './components/Alert/Alert';
import Video from './components/Video/Video';
import React, { Component } from 'react'
import axios from 'axios';

export default class App extends Component {
  state={
    statusCode:101,
    alertImg:0
  }
  constructor(props){
    super(props);
    this.appjs = React.createRef();
  }
  componentDidMount(){
    this.interval = setInterval(() => {
      this.checkStatus()
    }, process.env.REACT_APP_SEND_REQUEST_RESPONSE_TIME_IN_MS);
  }
  // statusResonsefromChild = (code) => {
  //   this.setState({ statusCode: code });
  // }
  resetAlarm() {
    alert("hello")
    this.setState({
      statusCode: process.env.REACT_APP_NO_VANDALISM_STATUS_CODE,
      alertImg: 0
    })
    }
  checkStatus() {
    axios.get(process.env.REACT_APP_CHECK_STATUS)
      .then((response) => {
        var ResponsestatusCode = response["data"]["status-code"]
        this.setState({
          statusCode: ResponsestatusCode
        })
        if (ResponsestatusCode == process.env.REACT_APP_NO_VANDALISM_STATUS_CODE) {
          this.setState({
            alertImg:0
          })
        } else if (ResponsestatusCode == process.env.REACT_APP_VANDALISM_STATUS_CODE){
          this.setState({
            alertImg: 1,
          })
        }
      });
  }
 
  render() {
    return (
      <div className="App">
        <ul class="nav">
          <li class="nav-item">
            <img style={{ "marginTop": "1vh", "paddingBottom": "1vh" }} src={xorv}></img>
          </li>
          <li id="reset-button"></li>
        </ul>
        <br />
        <table>
          <tr>
            <td style={{"height":"50vh"}}>
              {()=>{
                if(this.state.statusCode == process.env.REACT_APP_NO_VANDALISM_STATUS_CODE){
                  
                }

              }}
              <Video statusResonse={this.statusResonsefromChild}></Video>
            </td>
            <td colspan="2" rowspan="2">
              <Stream></Stream>
            </td>
          </tr>
          <tr>
            <td style={{ "height": "50vh" }}>
              <Alert 
                alertImg={this.state.alertImg}
                resetAlarm={this.resetAlarm}
              ></Alert>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

// function App() {
//   statusResonsefromChild = (langValue) => {
//     this.setState({ language: langValue });
//   }
//   return (
//     <div className="App">
//       <ul class="nav">
//         <li class="nav-item">
//           <img style={{"marginTop":"1vh", "paddingBottom":"1vh"}} src={xorv}></img>
//         </li>
//       </ul>
//       <br/>
//       <table>
//         <tr>
//           <td>
//             <Video statusResonse={this.statusResonsefromChild}></Video>
//           </td>
//           <td colspan="2" rowspan="2">
//             <Stream></Stream>
//           </td>
//         </tr>
//         <tr>
//           <td>
//             <Alert></Alert>
//           </td>
//         </tr>
//       </table>
//       {/* <table>
//         <tbody>
//           <tr>
//             <td>
//               <Stream></Stream>
//             </td>
//             <td>
//               <Alert></Alert>
//             </td>
//           </tr>
//           <tr>
//             <td style={{"height":"30vw"}} colSpan="2">
//               hello
//             </td>
//           </tr>
//         </tbody>
//       </table> */}
     
//     </div>
//   );
// }

// export default App;
