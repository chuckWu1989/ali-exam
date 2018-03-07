import React, { Component } from 'react';
import {
  IPV4TITLE,
  INTTITLE,
  TRANSFERBTNTITLE,
  INTVALUE,
  ERROR,
  ONINITIAL,
  ONDISPOSE,
  GETIPV4STRING,
  TRANSFER,
  defaultProps,
  propTypes,
} from './props';
import './style.less';

class Ipv4Converter extends Component {
  componentWillMount() {
    this.props[ONINITIAL]();
  }
  componentWillUnmount() {
    this.props[ONDISPOSE]();
  }
  render() {
    const {
      [IPV4TITLE]: ipv4Title,
      [INTTITLE]: intTitle,
      [TRANSFERBTNTITLE]: transferBtnTitle,
      [GETIPV4STRING]: getIpv4String,
      [ERROR]: error,
      [TRANSFER]: transfer,
      [INTVALUE]: intValue,
    } = this.props;
    return (
      <div className="ipv4-converter-style">
        <div>
          <div className="ipv4-title">
            {ipv4Title}
          </div>
          <div className="ipv4-input">
            <input type="text" onChange={getIpv4String} />
          </div>
        </div>
        <div className="btn-area">
          <input type="button" value={transferBtnTitle} onClick={transfer} />
        </div>
        <div>
          <div className="ipv4-title">
            {intTitle}
          </div>
          <div className="ipv4-input">
            <input type="text" value={intValue} />
            <div className="error">{error}</div>
          </div>
        </div>
      </div>
    );
  }
}
Ipv4Converter.defaultProps = defaultProps;
Ipv4Converter.propTypes = propTypes;

export default Ipv4Converter;
