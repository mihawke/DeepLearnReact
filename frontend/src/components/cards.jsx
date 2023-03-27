import React, { useEffect } from 'react';
import styles from './styles/cards.module.css'

export const Cards = () => {
    useEffect(() => {
    }, []);
    return (
        <div id="cards" className={styles.cards}>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
        </div>
    )
}
