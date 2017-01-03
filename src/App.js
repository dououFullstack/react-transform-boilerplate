import React, { Component, PropTypes} from 'react';
import { NICE, SUPER_NICE } from './colors';
import  './style/main.scss';
// import { Home } from './Home';
import Home from './Home'
import Navbar from './share/Navbar';
import AppBar from 'material-ui/lib/app-bar';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.setState({renderNavBar: false})
  }

  render() {
    console.log("this.state", this.state);
    return (
      <div className="app-wrap">
        {this.state.renderNavBar?<Navbar />:<AppBar />}
        {this.props.children}
        <div className="app-footer">app Footer</div>
      </div>
    );
  }
}
