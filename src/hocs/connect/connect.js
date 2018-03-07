import { connect } from 'react-redux';
import enhanceComponent from '../enhanceComponent';
import {
  getSuperStateToProps,
  getSuperMapDispatchProps,
  getSuperMergeProps,
} from './fn';

export default store => (
  (mapStateToProps, mapDispatchToProps, mergeProps) => (
    (component, defaultProps = {}, type = {}) => {
      const superStateToProps = getSuperStateToProps(
        mapStateToProps,
        defaultProps,
      );
      const superMapDispatchProps = getSuperMapDispatchProps(
        mapDispatchToProps,
        defaultProps,
      );
      const superMergeProps = getSuperMergeProps(mergeProps, defaultProps);
      const ConnectComponent = connect(
        superStateToProps,
        superMapDispatchProps,
        superMergeProps,
      )(component);
      const HOC = enhanceComponent(ConnectComponent, store);
      Object.keys(type).forEach((key) => {
        HOC[key] = type[key];
      });
      return HOC;
    }
  )
);
