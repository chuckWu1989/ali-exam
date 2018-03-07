import { createAction } from 'redux-actions';
import {
  ONINITIAL,
  ONUPDATEDATA,
  ONUPDATEUICONTROL,
  ONUPDATEEVENT,
  ONUPDATEPROPS,
  ONUPDATECHILDREN,
  ONDELETE,
} from '../../constants/ActionTypes';

export const onInitial = createAction(ONINITIAL);
export const onUpdateData = createAction(ONUPDATEDATA);
export const onUpdateUIControl = createAction(ONUPDATEUICONTROL);
export const onUpdateEvent = createAction(ONUPDATEEVENT);
export const onUpdateProps = createAction(ONUPDATEPROPS);
export const onUpdateChildren = createAction(ONUPDATECHILDREN);
export const onDelete = createAction(ONDELETE);
