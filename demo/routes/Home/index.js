import React from 'react';
import Ipv4Converter from '../../../src/containers/Ipv4ConverterContainer';
import TrafficLight from '../../../src/components/TrafficLight';
import ReduxTrafficLight from '../../../src/containers/ReduxTrafficLightContainer';
import './style.less';

const Ipv4ToInt = () => (
  <div className="home-style">
    <div className="inner-wrapper">
      <div className="exam">
        <div className="exam-title">Exam 1</div>
        <Ipv4Converter />
      </div>
      <div className="exam">
        <div className="exam-title">Exam 2 - 1</div>
        <TrafficLight />
      </div>
      <div className="exam">
        <div className="exam-title">Exam 2 - 2</div>
        <ReduxTrafficLight />
      </div>
    </div>
  </div>
);

export default Ipv4ToInt;
