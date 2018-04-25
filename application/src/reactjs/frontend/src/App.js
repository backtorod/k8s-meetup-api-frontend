import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ManageAccounts from './ManageAccounts.js';
require('bootstrap/dist/css/bootstrap.min.css');
require('./css/App.css');

class App extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://api.production.k8s.lookup8.com:8000/users/');
      const users = await res.json();
      this.setState({
        users
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div>
        {this.state.users.map(item => (
          <div>
            <ul class="list-group">
              <li class="list-group-item justify-content-between">
              <ul>Username: {item.username}</ul>
              <ul>{item.first_name}</ul>
              <ul>{item.last_name}</ul>
              <ul>{item.email}</ul>
              <ul>{item.url}</ul>
              </li>
           </ul>
         </div>  
        ))}
      </div>
    );
  }
}

export default App;
