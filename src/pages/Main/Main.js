import React, {useEffect, useState} from 'react';
import axios from "axios";

const Main = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then( res => {
                setData(res.data);
            })
            .catch( err => {
                console.log(err);
            })

        /*fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
               return response.json();
            })
            .then((data) => {
                console.log(data);
            })*/
    }, [])



    return (
        <>
            <h1>Метод Fetch</h1>
            <ul>
                {
                    data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul> <br/>

            <ul>
                {
                    data.map(item => (
                        <li key={item.id}>{item.username}</li>
                    ))
                }
            </ul>
        </>
    );
};

export default Main;