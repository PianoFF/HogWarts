import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import HogBrowser from './components/HogBrowser'; 
import API from './db/API'; 
import SortedHogs from "./components/SortedHogs";

class App extends Component {
  state ={
    hogs:[],
    showGreased: false,
    sorted: 'Default'
  };
  
// getter & setter for filter function
  greasedHogsFilter = () => {
    this.setState({
      showGreased: !this.state.showGreased
    })
  };

  filteredHogs = () => {
    return this.state.showGreased ?  this.state.hogs.filter(hog => hog.greased) : this.state.hogs
  };
  
// getter and setter for sorting function: 

  sortingPiglets = (sortType) => {
    this.setState({
      sorted: sortType
    })
  };

  sortedHogs = (piggies) => {
    if (this.state.sorted === 'Name'){
      return piggies.slice().sort((a,b)=> (a.name).localeCompare(b.name, {ignorePunctuation: true}))
    }
    if (this.state.sorted === 'Default'){
      return piggies
    }
    if (this.state.sorted === 'Weight'){
      return piggies.slice().sort((a,b) => (a.weight) - (b.weight))
    } 
  };


  render() {
    const {showGreased, hogs} = this.state; 
    const filteredpiglets = this.filteredHogs(hogs);
    const sortedPiglets = this.sortedHogs(filteredpiglets); 

    return (
      <div className="App">
        <Nav showGreased={showGreased} greasedHogsFilter={this.greasedHogsFilter}/>
        <SortedHogs sortingPiglets={this.sortingPiglets}/> 
        <HogBrowser piggies={sortedPiglets} sortingPiglets={this.sortingPiglets}/>
      </div>
    );
  }

  componentDidMount(){
    API.getAllHogs()
    .then(data =>{
      this.setState({ hogs: data});
    })
  }
};

export default App;
