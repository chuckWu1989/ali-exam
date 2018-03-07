import uuidv4 from 'uuid/v4';
import { NAME } from './props';

export const getId = () => uuidv4();
export const getName = (id, props) => {
  const { [NAME]: name } = props;
  return name !== undefined ? name : id;
};
export const mergeProps = (self, name, store) => (
  '_reactInternalInstance' in self &&
  '_context' in self._reactInternalInstance &&
  !('store' in self._reactInternalInstance._context) ?
    { ...self.props, name, store } :
    { ...self.props, name }
);
