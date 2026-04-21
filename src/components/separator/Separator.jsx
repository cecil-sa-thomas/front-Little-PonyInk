import styles from './Separator.module.css'

export default function Separator() {
    return (
        <div className={styles.separator}>
            <span className={styles.separator_line}></span>
            <span className={styles.separator_ornament}>&#10087;</span>
            <span className={styles.separator_line}></span>
        </div>

    )
}