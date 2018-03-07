import React, { Component } from 'react';
import Bulb from '../Bulb';
import './style.less';

class TrafficLight extends Component {
  constructor(props) {
    super(props);
    this.lightChange = this.lightChange.bind(this);
    this.state = { light: 0, event: undefined };
  }
  componentWillMount() {
    const event = setInterval(this.lightChange, 2000);
    this.setState({ event });
  }
  componentWillUnmount() {
    const { event } = this.state;
    clearInterval(event);
  }
  lightChange() {
    const { light } = this.state;
    const nextLight = (light + 1) % 3;
    this.setState({ light: nextLight });
  }
  render() {
    const { light } = this.state;
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

export default TrafficLight;
