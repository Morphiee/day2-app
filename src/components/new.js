import React, { Component } from 'react'

class Form extends Component {

  submitForm(e) {
    console.log(e)
    this.props.formdata(e.target)
    e.preventDefault()
  }

  render() {
    return(
      <form onSubmit={this.submitForm.bind(this)}>
        <input/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default Form
