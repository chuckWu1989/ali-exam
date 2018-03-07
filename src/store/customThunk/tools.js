import {
  SPROPS,
  SDATA,
  SCHILDREN,
  SUICONTROL,
  SEVENT,
  SSTORE,
} from '../../constants/Config';
import {
  onInitial,
  onDelete,
  onUpdateData,
  onUpdateChildren,
  onUpdateUIControl,
  onUpdateEvent,
  onUpdateProps,
} from '../../actions/storeAction';

export default (dispatch, getState) => (
  {
    superInit: (name, payload) => {
      if (getState().getIn([SSTORE, name]) === undefined) {
        dispatch(onInitial({ name }));
        dispatch(onUpdateProps({ name, payload }));
      }
    },
    superDispose: name => dispatch(onDelete({ name })),
    setData: (name, payload) => dispatch(onUpdateData({ name, payload })),
    getData: name => getState().getIn([SSTORE, name, SDATA]),
    setProps: (name, payload) => dispatch(onUpdateProps({ name, payload })),
    getProps: name => getState().getIn([SSTORE, name, SPROPS]),
    setChildren: (name, payload) => (
      dispatch(onUpdateChildren({ name, payload }))
    ),
    getChildren: name => getState().getIn([SSTORE, name, SCHILDREN]),
    setUIControl: (name, payload) => (
      dispatch(onUpdateUIControl({ name, payload }))
    ),
    getUIControl: name => getState().getIn([SSTORE, name, SUICONTROL]),
    setEvent: (name, payload) => dispatch(onUpdateEvent({ name, payload })),
    getEvent: name => getState().getIn([SSTORE, name, SEVENT]),
    trigger: action => dispatch(action),
  }
);
