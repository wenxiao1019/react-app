import React from 'react';

import Clock from './components/test/Clock';
import Header from './components/test/Header';
import MouseTracker from './components/test/MouseTracker';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <hr />
        <MouseTracker />
        <hr />
        <Clock />
      </div>
    );
  }
}

export default App;
