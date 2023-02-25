import React from "react"
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

var express = require("express");

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse: ""};
  }

  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }
  componentWillMount(){
    this.callAPI();
  }

render() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <p>{this.state.apiResponse}</p>
    </div>
    );
  }
}

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname+'index.html'));
});

app.use('/', router);
app.listen(process.env.port || 3000);

export default App;
