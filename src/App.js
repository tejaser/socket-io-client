import React, { Component } from "react";
import socketIOClient from "socket.io-client";


class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:8888"
    };
  }
componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }
render() {
    const { response } = this.state;
    return (
      <div style={{ textAlign: "center", color: "white", width: "120px", height: "100px", backgroundColor: "skyblue", margin: "100px auto", padding: "5px" }}>
        {response
          ? <p>
              The temperature in Florence is: {response} °F
            </p>
          : <p>Loading...</p>}
      </div>
    );
  }
}
export default App;