import React from 'react';
import Immutable from 'immutable';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import createStore from '../src/store/createStore';
import rootReducer from '../src/reducers';
import App from './layouts';

const initialState = Immutable.Map();
const store = createStore(rootReducer, initialState);
const render = (Component) => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

if (module.hot) {
  module.hot.accept('./layouts', async () => {
    const { default: nextApp } = await import('./layouts');
    render(nextApp);
  });
  module.hot.accept('../src/reducers', async () => {
    const { default: nextReducer } = await import('../src/reducers');
    store.replaceReducer(nextReducer);
  });
}

render(App);
