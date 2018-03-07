import connect from '../../hocs/connect';
import ReduxTrafficLight from '../../components/ReduxTrafficLight';
import { defaultProps, LIGHT, NAME, ONINITIAL, ONDISPOSE } from '../../components/ReduxTrafficLight/props';
import { onInitial, onDispose } from '../../actions/ReduxTrafficLightAction';
import { SSTORE, SDATA } from '../../constants/Config';

export const mapStateToProps = (state, props) => ({
  [LIGHT]: state.getIn([SSTORE, props[NAME], SDATA, LIGHT]),
});
export const mapDispatchToProps = (dispatch, props) => ({
  [ONINITIAL]: () => dispatch(onInitial(props)),
  [ONDISPOSE]: () => dispatch(onDispose(props)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxTrafficLight, defaultProps);

