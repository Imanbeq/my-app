import React, {useState} from 'react';
import styles from './Counter.module.css';

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
            <button className={styles.btn} onClick={increase}>+++</button>
            <button className={styles.btn} onClick={decrease}>---</button>
            <h1 className='title'>{count}</h1>

        </>
    );
};

export default Counter;