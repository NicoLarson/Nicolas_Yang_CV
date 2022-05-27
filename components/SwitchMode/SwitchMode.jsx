import styles from './switchMode.module.css'

export default function SwitchMode() {
    return (
        <div className={styles.switchMode}>
            <p onClick={() => document.body.classList.toggle("dark-mode")}>Dark/Light</p>
        </div>
    )
}
