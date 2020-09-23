import React, { Component } from 'react'
import './App.css';
import Work from './Work';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      show: false
    }
  }

  workChange = (work) => {
    this.setState({value: work});
  }

  displayWork = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo Application</h1>
        <h5>work tracking system</h5>
        <br />
        <Work value={this.state.value} 
          changeWorkHandler={this.workChange} displayWorkHandler={this.displayWork} />
        <br />
        {this.state.show && this.state.value}
      </div>
    )
  }
}

export default App
