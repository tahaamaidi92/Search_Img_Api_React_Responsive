import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar.js';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="main-container">
        <SearchBar/>
      </div>
     );
  }
}
 
export default App;
