import styles from './TitleSection.module.css'

export default function TitleSection({tag, title}) {
    return (

        <div className={styles.section_title}>
            <div className={styles.tag_line}>
                <span className={styles.line}></span>
                {tag && <span className={styles.tag}>{tag}</span>}
            </div>
            <h2 className={styles.title}>{title}</h2>
        </div>
    )
}