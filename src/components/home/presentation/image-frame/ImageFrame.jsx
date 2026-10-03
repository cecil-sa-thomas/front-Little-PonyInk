import styles from './ImageFrame.module.css'

export default function ImageFrame({src, alt}) {
    return (
        <div className={styles.frame}>
            <img src={src} alt={alt} />
        </div>
    )
}