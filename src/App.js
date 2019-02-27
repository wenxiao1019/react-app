import React from 'react';

import Header from './components/test/Header';
import MouseTracker from './components/test/MouseTracker';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MouseTracker />
      </div>
    );
  }
}

export default App;
