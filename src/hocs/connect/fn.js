import lodash from 'lodash';

export const getSuperStateToProps = (mapStateToProps, defaultProps = {}) => (
  typeof mapStateToProps === 'function' ?
    (state, props) => (
      mapStateToProps(state, lodash.merge({}, defaultProps, props))
    ) :
    null
);
export const getSuperMapDispatchProps = (
  mapDispatchToProps,
  defaultProps = {},
) => (
  typeof mapDispatchToProps === 'function' ?
    (dispatch, props) => (
      mapDispatchToProps(dispatch, lodash.merge({}, defaultProps, props))
    ) :
    null
);
export const getSuperMergeProps = (mergeProps, defaultProps = {}) => (
  typeof mergeProps === 'function' ?
    (stateProps, dispatchProps, props) => (
      mergeProps(stateProps, dispatchProps, lodash.merge({}, defaultProps, props))
    ) :
    null
);
