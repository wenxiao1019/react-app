import React from 'react';

import Header from './components/test/Header';
import MouseTracker from './components/test/MouseTracker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

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
