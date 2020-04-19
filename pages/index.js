import React, { Component } from 'react';
import Look from '../components/Look';
import Header from '../components/Header';

class MsgItem extends React.PureComponent {
  render() {
    return <li style={{ margin: "10px" }}> {this.props.msg} </li>;
  }
}

export default class App extends Component {
  state = { messages: [] }

  addMessage = () => {
    const messages = [...this.state.messages];
    console.log(messages === this.state.messages)
    messages.push(Math.random());
    this.setState({ messages });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Look/>
        <button onClick={this.addMessage}>add message</button>
        <ul>
          {
            this.state.messages.map((m, i) => <MsgItem key={i} msg={m} />)
          }
        </ul>
      </div>
    );
  }
}

// App.Layout = Look