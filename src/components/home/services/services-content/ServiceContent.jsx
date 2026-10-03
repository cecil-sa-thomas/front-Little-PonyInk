import styles from './ServiceContent.module.css'
import TitleSection from '../../../title-section/TitleSection'
import ButtonLink from '../../../buttons/ButtonLink'

export default function ServiceContent({ bgColor, tag, title, description, label, href, variant }) {
    return (
        <div className={styles.serviceContent} style={{ backgroundColor: bgColor }}>
            <TitleSection tag= {tag} title={title} />
            <p>{description}</p>
            <ButtonLink label={label} href={href} variant={variant}/>
        </div>
    )
}