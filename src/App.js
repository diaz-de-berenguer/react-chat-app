import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="container-fluid" id="main-container">
        <aside className="user-list">
          Online Users
        </aside>
        <section className="main">
          <section className="messages">
            Messages
          </section>
        </section>
        <section className="newMessage" id="new">
          <Button bsStyle="primary" block>Send</Button>
        </section>
      </div>
    );
  }
}

export default App;
