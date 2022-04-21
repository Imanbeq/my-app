import React, {useState} from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <>
            <button onClick={increase}>+++</button>
            <button onClick={decrease}>---</button>
            <h1>{count}</h1>

        </>
    );
};

export default Counter;