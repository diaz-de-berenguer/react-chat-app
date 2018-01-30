import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Button } from 'react-bootstrap';
import { Sidebar } from './containers/Sidebar';
import { MessagesList } from './containers/MessagesList';
import { AddMessage } from './containers/AddMessage';

class App extends Component {
  render() {
    return (
      <div className="container-fluid" id="main-container">
        <Sidebar />
        <section className="main">
          <MessagesList />
        </section>
        <AddMessage />
      </div>
    );
  }
}

export default App;
