import { useState } from "react";
import ChangeBackground from "./changeBackground";

import styles from "./weatherForm.module.css";

export default function WeatherForm({ onChangeCity }){
    
    const [city, setCity] = useState('');
    
    function onChange(e){
        const value = e.target.value;

        if(value !== ''){
            setCity(value)
        }
    }
    
    function callBackground(){
        
    }
    
    function handleSubmit(e){
        e.preventDefault();
        
        onChangeCity(city);
        callBackground();
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className={styles.container}>
                <input type="text" onChange={onChange} className={styles.input}></input>
                <ChangeBackground callBackground={callBackground}/>
            </form>
        </div>
    )

}