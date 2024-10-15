import { useEffect, useState, useRef } from "react"
import styles from "./loading.module.css"

export default function Loading({ callIcon }){

    const [icon, setIcon] = useState(1);
    const loaderRef = useRef(null);
    
    useEffect(() => {
      callIcon();
    }, [])
    
    
    function callIcon(){
        generateRandomIcon();
    }
    
    function generateRandomIcon() {
        const numRandom = (Math.floor(Math.random() * 7) + 1);
        setIcon(numRandom);
    }

    useEffect(() => {
      onChangeIcon();
    }, [icon])
    

    function onChangeIcon() {
        const loader = loaderRef.current;
      
        for (let i = 1; i <= 7; i++) {
          loader.classList.remove(styles[`icon${i}`]);
        }
      
        loader.classList.add(styles[`icon${icon}`]);
    }

    
    return (
        <div className={styles.loadingContainer}>
          
            <div ref={loaderRef} className={styles.loader}></div>
            <span className={styles.loaderPoints}></span>
            
            <div className={styles.iconCont}>
                <div className={styles.icon1}></div>
                <div className={styles.icon2}></div>
                <div className={styles.icon3}></div>
                <div className={styles.icon4}></div>
                <div className={styles.icon5}></div>
                <div className={styles.icon6}></div>
                <div className={styles.icon7}></div>
            </div>
        </div>
    )
}