import React from 'react';
import './App.css';
import UserSearch from "./components/UserSearch";
import UsersList from "./components/UsersList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchingText: "",
      users: []
    }
  }

  searchHandling = (event) => {
    this.setState({
      searchingText: event.target.value
    })
  };

  onSubmit = (event) => {
    event.preventDefault();
    const {searchingText} = this.state;
    const url = `https://api.github.com/search/users?q=${searchingText}`;
    fetch(url)
        .then(response => response.json())
        .then(response => this.setState({users: response.items}));
  };

  render() {
    return (
        <div>
          <UserSearch description="Search by user name" onSubmit={this.onSubmit}
          searchHandling={this.searchHandling}/>
          <UsersList users={this.state.users}/>
        </div>
    );
  }
}

export default App;
