import styles from './Button.module.css'

export default function ButtonLink({ label, href, variant }) {
    return (
        <a href={href} className={`${styles.btn} ${styles[variant]}`}>{label}</a>
    )
}