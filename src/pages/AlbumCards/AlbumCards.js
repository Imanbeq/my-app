import React, {useEffect, useState} from 'react';
import styles from './AlbumCards.module.css'

const color = {
    1:`b-red`,
    2:'b-pink',
    3:'b-green',
    4:'b-yellow',
    5:'b-grey'
}

const AlbumCards = () => {
    const [userData, setUserData] = useState([]);

    const getData = () => {
        const url = 'https://jsonplaceholder.typicode.com/photos';
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                setUserData(data);
            })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className={styles.container}>
            {
                userData.map((item, index) => {
                    return(
                        <div key={index} className={`${styles.albumCard} ${color[item.albumId]}`}>
                            <p>{item.albumId}</p>
                            <p>{item.id}</p>
                            <p>{item.title}</p>
                            <p>{item.url}</p>
                            <img className={styles.square} src={item.thumbnailUrl} alt="img"/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AlbumCards;