import React, { Component, PropTypes} from 'react';
import { NICE, SUPER_NICE } from './colors';
import  './style/main.scss';
// import { Home } from './Home';
import Home from './Home'
import Navbar from './share/Navbar';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("this.props", this.props);
    return (
      <div className="app-wrap">
        <Navbar />
        {this.props.children}
        <div className="app-footer">app Footer</div>
      </div>
    );
  }
}
