import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand"
          />
      </div>
    );
  }
}

export default App;
