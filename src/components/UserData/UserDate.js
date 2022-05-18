import React from 'react';
import styles from '../../pages/Main/Main.module.css'

const UserDate = (props) => {
    return (
        <>
            <div className={styles.card}>
                <p>{props.name}</p>
                <p>{props.userName}</p>
                <p>{props.email}</p>
                <p>{props.phone}</p>
                <p>{props.companyName}</p>
            </div>
        </>
    );
};

export default UserDate;