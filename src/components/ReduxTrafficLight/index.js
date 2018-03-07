import React, { Component } from 'react';
import Bulb from '../Bulb';
import { LIGHT, ONINITIAL, ONDISPOSE } from './props';
import '../TrafficLight/style.less';

class ReduxTrafficLight extends Component {
  componentWillMount() {
    this.props[ONINITIAL]();
  }
  componentWillUnmount() {
    this.props[ONDISPOSE]();
  }
  render() {
    const { [LIGHT]: light } = this.props;
    return (
      <div className="traffic-light-style">
        <div className="bulb-container">
          <Bulb color="green" light={light === 0} />
        </div>
        <div className="bulb-container">
          <Bulb color="yellow" light={light === 1} />
        </div>
        <div className="bulb-container">
          <Bulb color="red" light={light === 2} />
        </div>
      </div>
    );
  }
}

export default ReduxTrafficLight;
