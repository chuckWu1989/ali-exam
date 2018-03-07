import PropTypes from 'prop-types';

export const COLOR = 'color';
export const LIGHT = 'light';
export const defaultProps = {
  [COLOR]: 'green',
  [LIGHT]: false,
};
export const propTypes = {
  [COLOR]: PropTypes.string,
  [LIGHT]: PropTypes.bool,
};
