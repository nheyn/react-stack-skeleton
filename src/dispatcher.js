/* @flow */
import { createDispatcher } from 'async-dispatcher';

import navigation from './stores/navigation';

/*--------------------------------------------------------------------------------------------------------------------*/
//  --- Create dispatcher with all stores ---
/*--------------------------------------------------------------------------------------------------------------------*/
export default createDispatcher({
  navigation,
});
