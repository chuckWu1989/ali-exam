import PropTypes from 'prop-types';

export const NAME = 'name';
export const WRAPPEDCOMPONENT = 'WrappedComponent';
export const GETID = 'getId';
export const GETNAME = 'getName';
export const defaultProps = {
};
export const propTypes = {
  [NAME]: PropTypes.string,
  [WRAPPEDCOMPONENT]: PropTypes.func,
  [GETID]: PropTypes.func,
  [GETNAME]: PropTypes.func,
};
