import tools from './tools';

export default ({ dispatch, getState }) => (
  next => (
    (action) => {
      if (typeof action === 'function') {
        const instTools = tools(dispatch, getState);
        return action(dispatch, getState, instTools);
      }
      return next(action);
    }
  )
);
