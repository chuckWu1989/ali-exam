import React from 'react';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Immutable from 'immutable';
import {
  defaultProps,
  NAME,
  IPV4TITLE,
  INTTITLE,
  INTVALUE,
  ERROR,
  ONINITIAL,
  ONDISPOSE,
  GETIPV4STRING,
  TRANSFER,
  ERRORMSG,
} from '../src/components/Ipv4Converter/props';
import { IPV4AVALUE } from '../src/actions/Ipv4ConverterAction/config';
import Ipv4Converter from '../src/components/Ipv4Converter';
import { mapStateToProps, mapDispatchToProps } from '../src/containers/Ipv4ConverterContainer';
import customThunk from '../src/store/customThunk';
import { SSTORE, SDATA } from '../src/constants/Config';
import BaseModel from '../src/models/BaseModel';
import * as actions from '../src/actions/Ipv4ConverterAction';

const mockStore = configureStore([customThunk]);
const { shallow } = global;
const props = {
  [NAME]: 'test',
  [IPV4TITLE]: 'IPV4 test title',
  [INTTITLE]: 'Int test title',
  [INTVALUE]: 'test value',
  [ERRORMSG]: 'Wrong',
};

describe('Ipv4Converter', () => {
  describe('component', () => {
    it('should be rendered properly', () => {
      const ownProps = {
        ...props,
      };
      const tree = toJson(shallow(<Ipv4Converter {...ownProps} />));
      expect(tree).toMatchSnapshot();
    });
    it('should call methods during lifecycle', () => {
      const ownProps = {
        ...props,
        [ONINITIAL]: jest.fn(),
        [ONDISPOSE]: jest.fn(),
      };
      const wrapper = shallow(
        <Ipv4Converter {...ownProps} />,
        { lifecycleExperimental: true },
      );
      wrapper.unmount();
      expect(ownProps[ONINITIAL]).toHaveBeenCalledTimes(1);
      expect(ownProps[ONDISPOSE]).toHaveBeenCalledTimes(1);
    });
  });
  describe('container', () => {
    const state = {
      getIn: () => {},
    };
    const dispatch = () => {};
    const mapState = mapStateToProps(state, props);
    const mapDispatch = mapDispatchToProps(dispatch, props);
    describe('mapStateToProps', () => {
      it('should pass intValue', () => {
        expect(INTVALUE in mapState).toBeTruthy();
      });
      it('should pass error', () => {
        expect(ERROR in mapState).toBeTruthy();
      });
    });
    describe('mapDispatchToProps', () => {
      it('should pass onInitial', () => {
        expect(ONINITIAL in mapDispatch).toBeTruthy();
      });
      it('should pass getIpv4String', () => {
        expect(GETIPV4STRING in mapDispatch).toBeTruthy();
      });
      it('should pass transfer', () => {
        expect(TRANSFER in mapDispatch).toBeTruthy();
      });
      it('should pass onDispose', () => {
        expect(ONDISPOSE in mapDispatch).toBeTruthy();
      });
    });
  });
  describe('action', () => {
    let store;
    beforeEach(() => {
      store = mockStore(Immutable.Map({}).setIn([SSTORE, props[NAME]], BaseModel));
    });
    describe('onInitial', () => {
      it('should call superInit', () => {
        store.dispatch(actions.onInitial(defaultProps));
        expect(store.getActions().length).toBe(2);
      });
    });
    describe('onDispose', () => {
      it('should call superDispose', () => {
        store.dispatch(actions.onDispose(defaultProps));
        expect(store.getActions().length).toBe(1);
      });
    });
    describe('getIpv4String', () => {
      it('should get ipv4 string in payload', () => {
        const ownProps = { ...defaultProps, ...props };
        const target = '123';
        const event = { target: { value: target } };
        store.dispatch(actions.getIpv4String(event, ownProps));
        expect(store.getActions()[0].payload.payload.get(IPV4AVALUE)).toBe(target);
      });
    });
    describe('ipv4ToInt', () => {
      it('should return errorMsg if the format of ipv4 string is invalid', () => {
        const ipv4 = 'Error format';
        const err = 'Error message';
        const { intValue, errorMsg } = actions.ipv4ToInt(ipv4, err);
        expect(errorMsg).toBe(err);
        expect(intValue).toBeUndefined();
      });
      it('should return int value if the format of ipv4 string is valid', () => {
        const ipv4 = '182 .234. 35 .42';
        const err = 'Error message';
        const { intValue, errorMsg } = actions.ipv4ToInt(ipv4, err);
        expect(errorMsg).toBeUndefined();
        expect(intValue).toBe(3068797738);
      });
    });
    describe('transfer', () => {
      it('should emit payload with transfered data', () => {
        const ownProps = { ...defaultProps, ...props };
        const ipv4 = '182 .234. 35 .42';
        const newModel = BaseModel.setIn([SDATA, IPV4AVALUE], ipv4);
        store = mockStore(Immutable.Map({}).setIn([SSTORE, props[NAME]], newModel));
        store.dispatch(actions.transfer(ownProps));
        expect(store.getActions()[0].payload.payload.get(INTVALUE)).toBe('3068797738');
      });
    });
  });
});
