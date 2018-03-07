import PropTypes from 'prop-types';

export const NAME = 'name';
export const LIGHT = 'light';
export const ONINITIAL = 'onInitial';
export const ONDISPOSE = 'onDispose';
export const defaultProps = {
  [LIGHT]: 0,
  [ONINITIAL]: () => {},
  [ONDISPOSE]: () => {},
};
export const propTypes = {
  [NAME]: PropTypes.string.isRequired,
  [LIGHT]: PropTypes.number,
  [ONINITIAL]: PropTypes.func,
  [ONDISPOSE]: PropTypes.func,
};
