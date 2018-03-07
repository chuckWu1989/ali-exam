import { NAME, LIGHT } from '../../components/ReduxTrafficLight/props';
import { TIME, EVENT } from './config';

export const changeLight = (props, tools) => (
  () => {
    const { [NAME]: name, [LIGHT]: defaultLight } = props;
    const { getData, setData } = tools;
    let payload = getData(name);
    let light = payload.get(LIGHT);
    light = light !== undefined ? light : defaultLight;
    light = (light + 1) % 3;
    payload = payload.set(LIGHT, light);
    setData(name, payload);
  }
);
export const setIntervalEvent = props => (
  (dispatch, getState, tools) => {
    const { [NAME]: name } = props;
    const { setEvent, getEvent } = tools;
    const listener = changeLight(props, tools);
    const event = setInterval(listener, TIME);
    let payload = getEvent(name);
    payload = payload.set(EVENT, event);
    setEvent(name, payload);
  }
);
export const onInitial = props => (
  (dispatch, getState, tools) => {
    const { [NAME]: name, [LIGHT]: light } = props;
    const { superInit, getData, setData } = tools;
    superInit(name, props);
    dispatch(setIntervalEvent(props));
    let payload = getData(name);
    payload = payload.set(LIGHT, light);
    setData(name, payload);
  }
);
export const onDispose = props => (
  (dispatch, getState, tools) => {
    const { [NAME]: name } = props;
    const { superDispose, getEvent } = tools;
    const payload = getEvent(name);
    const event = payload.get(EVENT);
    clearInterval(event);
    superDispose(name);
  }
);
