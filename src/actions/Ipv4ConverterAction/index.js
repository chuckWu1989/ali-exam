import { NAME, INTVALUE, ERRORMSG, ERROR } from '../../components/Ipv4Converter/props';
import { IPV4AVALUE, IPREGEX, SPACEREGEX } from './config';

export const ipv4ToInt = (ipv4, err) => {
  let errorMsg;
  let intValue;
  const regex = new RegExp(IPREGEX);
  if (!regex.test(ipv4)) {
    errorMsg = err;
  } else {
    intValue = ipv4.split('.').map((item, idx, array) => (
      parseInt(item.replace(SPACEREGEX, ''), 10) * (256 ** (array.length - idx - 1))
    )).reduce((prev, curr) => prev + curr);
  }
  return { intValue, errorMsg };
};
export const transfer = props => (
  (dispatch, getState, tools) => {
    const { [NAME]: name, [ERRORMSG]: err } = props;
    const { getData, setData } = tools;
    let payload = getData(name);
    const ipv4Value = payload.get(IPV4AVALUE);
    const { intValue, errorMsg } = ipv4ToInt(ipv4Value, err);
    payload = payload.set(INTVALUE, String(intValue)).set(ERROR, errorMsg);
    setData(name, payload);
  }
);
export const getIpv4String = (event, props) => (
  (dispatch, getState, tools) => {
    const { [NAME]: name } = props;
    const { target: { value } } = event;
    const { getData, setData } = tools;
    let payload = getData(name);
    payload = payload.set(IPV4AVALUE, value);
    setData(name, payload);
  }
);
export const onInitial = props => (
  (dispatch, getState, tools) => {
    const { [NAME]: name } = props;
    const { superInit } = tools;
    superInit(name, props);
  }
);
export const onDispose = props => (
  (dispatch, getState, tools) => {
    const { [NAME]: name } = props;
    const { superDispose } = tools;
    superDispose(name);
  }
);
