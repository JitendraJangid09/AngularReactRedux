import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware() // You can add middleware here if needed
  ));

export default store;
