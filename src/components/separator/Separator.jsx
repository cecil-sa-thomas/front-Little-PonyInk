import styles from './Separator.module.css'

export default function Separator({ color = 'var(--blush)', width = '100%' }) {
    return (
        <div className={styles.separator}>
            <span className={styles.separator_line} style={{ background: color, width: width }}></span>
            <span className={styles.separator_ornament} style={{ color: color }}>&#10087;</span>
            <span className={styles.separator_line} style={{ background: color, width: width }}></span>
        </div>
    )
}