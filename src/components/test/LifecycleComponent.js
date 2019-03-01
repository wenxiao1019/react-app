import React from 'react';

class LifecycleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleFlag: false
    };
    console.log('Constructor Called');
  }

  componentWillMount() {
    console.log('Component Will Mount');
  }

  componentDidMount() {
    this.timeID = setInterval(
      () => this.tick(),
      1000
    );
    console.log('Component Did Mount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('Component Will Receive Props', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should Component Update', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component Will Update', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did Update', prevProps, prevState);
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
    console.log('Component Will Unmount');
  }

  tick() {
    this.setState({
      toggleFlag: !this.state.toggleFlag
    });
  }

  render() {
    return (
      <div>
        <p>This is testing React Component Lifecycle</p>
        <p>Please open browser console to check for more information.</p>
      </div>
    );
  }
}

export default LifecycleComponent;
