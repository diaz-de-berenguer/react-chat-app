
// import logo from './logo.svg';
import './App.css';
// import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { SideBar }          from './containers/SideBar';
import { MessagesList }     from './containers/MessagesList';
import { AddMessage }       from './containers/AddMessage';

class App extends Component {
  render() {
    return (
      <div className="container-fluid" id="main-container">
        <SideBar />
        <section className="main">
          <MessagesList />
        </section>
        <AddMessage />
      </div>
    );
  }
}

export default App;
