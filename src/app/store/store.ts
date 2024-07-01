import { createStore } from 'redux';
import reducer from './reducers';

// Create the Redux store
const store = createStore(reducer);

export default store;
