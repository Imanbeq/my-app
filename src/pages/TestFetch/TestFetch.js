import React from 'react';
import styles from './TestFetch.module.css'
const url = 'http://localhost:3001/users'

const TestFetch = () => {

    const getUsers = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    const addUser = () => {
        const obj = {
            name: 'Test 1'
        }

        const options = {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify(obj)
        }

        fetch(url, options)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    const deleteUser = () => {
        const options = {
            method: 'DELETE'
        }
        fetch(url + '/' + 11, options)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    const updateUser = () => {
        const data = {
            name:"Sasha"
        }

        const options = {
            method:'PUT',
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }

        fetch(url + '/' + 5, options)
            .then(response => response.json())
            .then(data => console.log(data))
    }



    return (
        <>
            <div className={styles.container}>
                <button onClick={getUsers}>Get users</button>
                <button onClick={addUser}>Add user</button>
                <button onClick={deleteUser}>Delete user</button>
                <button onClick={updateUser}>Update user</button>
            </div>
        </>
    );
};

export default TestFetch;





