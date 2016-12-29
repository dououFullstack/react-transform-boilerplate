import React, {Component, PropTypes} from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home">
       <div className="slogan">Welcome to Stage 2</div>
     </div>
    );
  }
}
Home.propTypes = {
};
