import PropTypes from 'prop-types';

export const NAME = 'name';
export const IPV4TITLE = 'ipv4Title';
export const INTTITLE = 'intTitle';
export const TRANSFERBTNTITLE = 'transferBtnTitle';
export const INTVALUE = 'intValue';
export const ERRORMSG = 'errorMsg';
export const ERROR = 'error';
export const ONINITIAL = 'onInitial';
export const ONDISPOSE = 'onDispose';
export const GETIPV4STRING = 'getIpv4String';
export const TRANSFER = 'transfer';
export const defaultProps = {
  [INTVALUE]: '',
  [ERROR]: undefined,
  [ERRORMSG]: 'The format of IPV4 is invalid!',
  [IPV4TITLE]: 'IPV 4 Address',
  [INTTITLE]: 'Transfered Integer',
  [TRANSFERBTNTITLE]: 'Transfer',
  [ONINITIAL]: () => {},
  [ONDISPOSE]: () => {},
  [TRANSFER]: () => {},
  [GETIPV4STRING]: () => {},
};
export const propTypes = {
  [NAME]: PropTypes.string.isRequired,
  [IPV4TITLE]: PropTypes.string,
  [INTTITLE]: PropTypes.string,
  [INTVALUE]: PropTypes.string,
  [ERROR]: PropTypes.string,
  [ERRORMSG]: PropTypes.string,
  [TRANSFERBTNTITLE]: PropTypes.string,
  [ONINITIAL]: PropTypes.func,
  [ONDISPOSE]: PropTypes.func,
  [TRANSFER]: PropTypes.func,
  [GETIPV4STRING]: PropTypes.func,
};
