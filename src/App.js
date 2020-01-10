import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import HogBrowser from './components/HogBrowser'; 

class App extends Component {
  state ={
    hogs:[],
  }

  
  render() {
    return (
      <div className="App">
        <Nav />
        <HogBrowser piggies={this.state.hogs}/>
      </div>
    );
  }

  componentDidMount(){
    fetch('http://localhost:3000/hogs')
    .then(resp => resp.json())
    .then(data =>{
      this.setState({ hogs: data});
    })
  }
}

export default App;
