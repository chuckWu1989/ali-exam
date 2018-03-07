import connect from '../../hocs/connect';
import Ipv4Converter from '../../components/Ipv4Converter';
import { ONINITIAL, ONDISPOSE, GETIPV4STRING, TRANSFER, INTVALUE, ERROR, NAME, defaultProps } from '../../components/Ipv4Converter/props';
import { onInitial, onDispose, getIpv4String, transfer } from '../../actions/Ipv4ConverterAction';
import { SSTORE, SDATA } from '../../constants/Config';

export const mapStateToProps = (state, props) => ({
  [INTVALUE]: state.getIn([SSTORE, props[NAME], SDATA, INTVALUE]),
  [ERROR]: state.getIn([SSTORE, props[NAME], SDATA, ERROR]),
});
export const mapDispatchToProps = (dispatch, props) => ({
  [ONINITIAL]: () => dispatch(onInitial(props)),
  [GETIPV4STRING]: event => dispatch(getIpv4String(event, props)),
  [TRANSFER]: () => dispatch(transfer(props)),
  [ONDISPOSE]: () => dispatch(onDispose(props)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ipv4Converter, defaultProps);
