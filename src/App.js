import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/new.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      input2: ""
    }
  }

  handleForm(formdata){
    console.log(formdata)
  }

  handleChange(x){
    var value = x.target.value
    var name = x.target.name
    this.setState({name: value})
    console.log(value)
  }

  render() {
    return (
      <div>
        <h1>Hello Nerd!</h1>
        <Form formvalue={this.state.input} formdata={this.handleForm.bind(this)}/>
      </div>
    );
  }
}

export default App;
