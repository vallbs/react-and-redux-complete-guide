import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';

class App extends Component {

  state = {
    users: [
      {name: 'Dima', additionalOutput: ""},
      {name: 'Roma', additionalOutput: ""},
      {name: 'Yura', additionalOutput: ""}
    ]
  };

  addInputHandler1 = (event) => {
    console.log(event.target);
    this.setState({
      users: [
        {name: event.target.value},
        {name: 'Roma', additionalOutput: ""}
      ]
    });
  }

  addInputHandler2 = (event) => {
    console.log(event.target);
    this.setState({
      users: [
        {name: 'Dima'},
        {name: event.target.value}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          addInput={this.addInputHandler1}>
        </UserInput>
        <UserOutput
          name={this.state.users[0].name}>
        </UserOutput>

        <UserInput 
          addInput={this.addInputHandler2}>
        </UserInput>
        <UserOutput
          name={this.state.users[1].name}>
        </UserOutput>

      </div>
    );
  }
}

export default App;
