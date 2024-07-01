import { combineReducers } from 'redux';

// Define your initial state and reducer functions
const initialState = {
    counter: 0,
};

function counterReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 };
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
}

// Combine all reducers if you have more than one
const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;
