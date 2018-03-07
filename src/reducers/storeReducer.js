import { handleActions } from 'redux-actions';
import InitialModel from '../models/InitialModel';
import BaseModel from '../models/BaseModel';
import {
  ONINITIAL,
  ONUPDATEDATA,
  ONUPDATEUICONTROL,
  ONUPDATEEVENT,
  ONUPDATEPROPS,
  ONUPDATECHILDREN,
  ONDELETE,
} from '../constants/ActionTypes';
import {
  SDATA,
  SUICONTROL,
  SEVENT,
  SCHILDREN,
  SPROPS,
} from '../constants/Config';

export default handleActions({
  [ONINITIAL]: (state, { payload }) => (
    state.set(payload.name, BaseModel)
  ),
  [ONUPDATEDATA]: (state, { payload }) => (
    state.setIn([payload.name, SDATA], payload.payload)
  ),
  [ONUPDATEUICONTROL]: (state, { payload }) => (
    state.setIn([payload.name, SUICONTROL], payload.payload)
  ),
  [ONUPDATEEVENT]: (state, { payload }) => (
    state.setIn([payload.name, SEVENT], payload.payload)
  ),
  [ONUPDATEPROPS]: (state, { payload }) => (
    state.setIn([payload.name, SPROPS], payload.payload)
  ),
  [ONUPDATECHILDREN]: (state, { payload }) => (
    state.setIn([payload.name, SCHILDREN], payload.payload)
  ),
  [ONDELETE]: (state, { payload }) => (
    state.remove(payload.name)
  ),
}, InitialModel);
