import ButtonLink from '../buttons/buttonLink'
import ImageFrame from '../image-frame/ImageFrame'
import TitleSection from '../title-section/TitleSection'
import styles from './About.module.css'
import artistePhoto from '../../assets/images/pic-test-deb.png'

export default function About() {
    return (
        <section>
            <div className={styles.about}>
                <div className={styles.colum_image}>
                    <ImageFrame src={artistePhoto} alt="{alt}"  onError={(e) => e.target.src = 'https://placehold.co/400x500'}/>
                </div>
                <div className={styles.colum_text}>
                    <TitleSection tag="studio" title="Présentation" />
                    <div className={styles.content}>
                        <p>
                        Bienvenue dans l'univers de <strong>Little Pony Ink</strong>.
                        Un studio indépendant dédié aux univers
                        <span style={{ color: 'var(--gold)' }}> pop culture, manga, dessins animés </span>
                        et au-delà.
                        </p>
                        <br />
                        <br />
                        <p>Du trait fin au plein noir, du flash disponible de suite au projet  ambitieux travaillé ensemble — chaque tatouage est abordé avec soin,  écoute et précision.</p>
                        <br />
                        <br />
                        <p>Parce qu'un bon tatouage, c'est avant tout
                            <strong> une belle conversation.</strong>
                        </p>
                    </div>
                    <ButtonLink label="Prendre contact" href="placeholder" variant="primary"/>
                </div>
            </div>
        </section>
    )
}