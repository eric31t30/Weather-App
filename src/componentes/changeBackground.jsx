import { useState, useEffect } from "react";
import styles from './changeBackground.module.css';

export default function ChangeBackground({ callBackground }) {
    
    const [background, setBackground] = useState(1);
    
    function handleCallBackground() {
        generateRandomBackground();
    }
    
    function generateRandomBackground() {
        const numRandom = (Math.floor(Math.random() * 10) + 1);
        setBackground(numRandom);
    }

    useEffect(() => {
        const onChangeBackground = () => {
            const body = document.querySelector('body');
            for (let i = 1; i <= 10; i++) {
                body.classList.remove(`background${i}`);
            }
            body.classList.add(`background${background}`);
        };

        onChangeBackground();
    }, [background]);

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.transition = "background-image .5s ease";
    }, []);

    return (
        <div>
            <button className={styles.button} onClick={handleCallBackground}></button>
            <div className={styles.containerBackgrounds}>
                <div className={styles.background1}></div>
                <div className={styles.background2}></div>
                <div className={styles.background3}></div>
                <div className={styles.background4}></div>
                <div className={styles.background5}></div>
                <div className={styles.background6}></div>
                <div className={styles.background7}></div>
                <div className={styles.background8}></div>
                <div className={styles.background9}></div>
                <div className={styles.background10}></div>
            </div>
        </div>
    )
}
