import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ReactCounter: React.FC = () => {
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
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default ReactCounter;
