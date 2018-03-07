import React from 'react';
import { defaultProps, propTypes } from './props';
import { getId, getName, mergeProps } from './fn';

const enhanceComponent = (WrappedComponent, store) => (
  class extends React.Component {
    static defaultProps = defaultProps
    static propTypes = propTypes
    componentWillMount() {
      this.setState({ id: getId() });
    }
    render() {
      const { id } = this.state;
      const name = getName(id, this.props);
      const ownProps = mergeProps(this, name, store);
      return (
        <WrappedComponent {...ownProps} />
      );
    }
  }
);

export default enhanceComponent;
