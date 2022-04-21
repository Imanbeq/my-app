import React, {useState} from 'react';

const styleButton = {
    backgroundColor: 'black',
    color:'white',
    padding:'15px 35px',
    marginRight: '5px',
    border:'none',
    fontSize: '22px'
}

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
            <button style={styleButton} onClick={increase}>+++</button>
            <button style={styleButton} onClick={decrease}>---</button>
            <h1>{count}</h1>

        </>
    );
};

export default Counter;