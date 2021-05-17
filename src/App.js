import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: robots,
      searchField: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ searchField: target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox
          value={this.state.searchField}
          onSearchChange={this.handleChange}
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
