// src/app/react-components/ReactCounter.tsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../store/store';

const Counter: React.FC = () => {
    const counter = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const decrement = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <div>
            <h2>React Counter</h2>
            <p>Count: {counter}</p>
            <button onClick={increment}>Increment by react</button>
            <button onClick={decrement}>Decrement by react</button>
        </div>
    );
};

const ReactCounter: React.FC = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
);

export default ReactCounter;
