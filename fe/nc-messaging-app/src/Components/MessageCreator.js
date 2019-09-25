import React, { Component } from 'react';

class MessageCreator extends Component {
  state = {
    // newMessageUsername: '',
    messageBody: ''
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name='messageBody' placeholder='Type your new message here' onChange={this.handleChange} />
        <button>Send</button>
      </form>
    );
  }
}

export default MessageCreator;