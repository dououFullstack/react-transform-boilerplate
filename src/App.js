import React, { Component, PropTypes} from 'react';
import { NICE, SUPER_NICE } from './colors';
import  './style/main.scss';
// import { Home } from './Home';
import Home from './Home'
import Navbar from './share/Navbar';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-wrap">
        <Navbar />
        <Home />
        <div className="app-footer">app Footer</div>
      </div>
    );
  }
}
App.PropTypes = {

}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <Counter increment={1} color={NICE} />
//         <Counter increment={5} color={SUPER_NICE} />
//       </div>
//     );
//   }
// }
