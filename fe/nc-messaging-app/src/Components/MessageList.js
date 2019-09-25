import React, { Component } from 'react';

import io from 'socket.io-client';
const socket = io('http://localhost/3000');


class MessageList extends Component {
  state = {
    endpoint: 'http://localhost/3000',
    receivedMessages: [],
    newMessageBody: ''
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { newMessageBody } = this.state;
    socket.emit('chat message', newMessageBody)
    this.setState({ newMessageBody: '' })
  }

  componentDidMount() {
    socket.on('received message', (receivedMessage) => {
      this.setState((currentState) => {
        return { receivedMessages: [...currentState.receivedMessages, receivedMessage] }
      })
    })
  }

  render() {
    const { receivedMessages } = this.state;
    return (
      <div>
        <ul>
          {receivedMessages.map(message => {
            return <li>{message.body}</li>
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input name='messageBody' placeholder='Type your new message here' onChange={this.handleChange} />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default MessageList;