import React, {useEffect} from 'react';

const Main = () => {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
               return response.json();
            })
            .then((data) => {
                const dataArr= data.map((item) => {
                    return item.name
                })
                console.log(dataArr);
                //useState use!
            })
    }, [])

    return (
        <>
            <h1>Метод Fetch</h1>
        </>
    );
};

export default Main;