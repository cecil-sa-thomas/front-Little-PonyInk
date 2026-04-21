import styles from './Hero.module.css'
import Separator from '../separator/Separator'
import ButtonLink from '../buttons/buttonLink'

export default function Hero({ tag, title, titleAccent, subTitle, description, cta }) {
    return (
        <section className={styles.hero}>

            {/* Appel du composant Hero
                <Hero
                    tag="- Tag -"
                    title="Titre"
                    titleAccent="Titre part 2 avec couleur"
                    subTitle="Sous titre"
                    description="Une description selon la page"
                    cta={[
                        { label: "bouton1", href: "#section de la page", variant: "secondary" },
                        { label: "bouton2", href: "/adresse de la page", variant: "primary" }
                    ]}
                />
            */}
            {tag && <span className={styles.tag}>{tag}</span>}
            <div className={styles.titleDiv}>
                <h1 className={styles.title}>{title}</h1>
                {titleAccent && <h1 className={styles.titleAccent}>{titleAccent}</h1>}
                {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
            </div>
            
            <Separator color="var(--gold-pale)" width="15%" />

            {/* Description */}
            {description && (
                <div className={styles.description}>
                    {description.map((phrase) => (
                        <p key={phrase}>{phrase}</p>
                    ))}
                </div>
            )}

            {/* Boutons CTA */}
            {cta && (
                <div className={styles.ctaGroup}>
                    {cta.map((btn) => (
                        <ButtonLink
                            key={btn.label}
                            label={btn.label}
                            href={btn.href}
                            variant={btn.variant}
                        />
                    ))}
                </div>
            )}
            
        </section>
    )
}