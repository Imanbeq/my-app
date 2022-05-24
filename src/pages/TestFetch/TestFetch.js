import React, {useEffect} from 'react';

const TestFetch = () => {

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

        const url = 'http://localhost:3001/users'
        fetch(url, options)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    useEffect(() => {
        addUser();
    }, []);

    return (
        <>
            <h1>hello</h1>
        </>
    );
};

export default TestFetch;