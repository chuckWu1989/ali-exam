import Immutable from 'immutable';
import {
  SDATA,
  SPROPS,
  SCHILDREN,
  SUICONTROL,
  SEVENT,
} from '../../constants/Config';

export default Immutable.fromJS({
  [SDATA]: {},
  [SPROPS]: undefined,
  [SCHILDREN]: undefined,
  [SUICONTROL]: {},
  [SEVENT]: {},
});
