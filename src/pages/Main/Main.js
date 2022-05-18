import React, {useEffect, useState} from 'react';
import styles from './Main.module.css'
import UserDate from "../../components/UserData/UserDate";

const Main = () => {
    const [userData, setUserData] = useState([]);

    const getData = () => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                setUserData(data);
            })
    }

    useEffect(() => {
        return getData();
    }, [])

    return (
        <div className={styles.container}>

             {
                userData.map((item) => {
                    return(
                        <UserDate
                            name={item.name}
                            userName={item.username}
                            email={item.email}
                            phone={item.phone}
                            companyName={item.company.name}
                        />
                    )
                })
            }

        </div>
    );
};

export default Main;