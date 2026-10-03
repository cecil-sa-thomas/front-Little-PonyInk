import styles from './Services.module.css'
import ServicesContent from './services-content/ServiceContent'

export default function Services() {
    return (
        <section>
            <div className={styles.services}>
                <ServicesContent
                    bgColor="var(--soft-purple)"
                    tag="Disponible tout de suite"
                    title="Flash"
                    description="Des motifs uniques prêts à tatouer. Chaques flash est une pièce originale - premier arrivé, premier servi !"
                    label="Voir la galerie flash"
                    href="placeholder"
                    variant="primary"
                />
                <ServicesContent
                    bgColor="var(--plum-mid)"
                    tag="Sur Mesure "
                    title="Projets personnalisés"
                    description="Un projet personnalisé ? On le construit ensemble de A à Z, de l'esquisse au résultat final sur votre peau"
                    label="Envoyer un projet"
                    href="placeholder"
                    variant="tertiary"
                />
            </div>
        </section>
    )
}