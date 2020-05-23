import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Home from '../src/components/home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
