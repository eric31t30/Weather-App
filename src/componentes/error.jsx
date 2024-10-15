import styles from "./error.module.css";

import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Error(){
    return (
        <div className={styles.errorContainer}>
            <div className={styles.errorText}>Entrada no válida. Ingresa una
            <span className={styles.errorTextDeco}> ciudad</span>  o <span className={styles.errorTextDeco}>país</span> válido. </div>
            <div>
                <div className={styles.errorIcon}>
                        <AiOutlineCloseCircle />
                    </div>
            </div>
        </div>
    )
}