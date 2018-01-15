import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state({
      userID : "",
      data : []
    });

    this.initViewPort = this.initViewPort.bind(this);
  }

  initViewPort() {
    const viewport = FluxViewPort(document.querySelector('view'));
    viewport.setupDefaultLighting();
  }

  componentDidMount() {
    this.initViewPort();
  }

  render() {
    return (
      <h2>Flux Viewport</h2>,
      <div>{this.initViewPort}</div>
    );
  }
}

export default App;
