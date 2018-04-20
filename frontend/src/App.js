import React, { Component } from 'react';

class App extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost/users/');
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
          <div key={item.url}>
            <h1>{item.username}</h1>
            <span>{item.email}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;