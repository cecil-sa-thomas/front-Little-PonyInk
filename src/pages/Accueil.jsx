import About from "../components/about/About"
import Hero from "../components/hero/Hero"

export default function Accueil() {
    return (
        <>
            <Hero
                        tag="- Sur rendez-vous -"
                        title="Little Pony Ink"
                        titleAccent="Test titre part 2"
                        subTitle="Art du tatouage"
                        description={[
                            "Flash délicat ou projet sur mesure — pop culture, manga, illustration.",
                            "Chaque tatouage est pensé pour durer et vous ressembler."
                        ]}
                        cta={[
                            { label: "VOIR LA GALERIE", href: "#galerie", variant: "primary" },
                            { label: "PRENDRE RDV", href: "#contact", variant: "secondary" }
                        ]}
                        radialColor='var(--plum-mid)'
                        baseFrom= 'var(--blush)'
                        baseTo='var(--rose)'
                    />
            <About />
        </>
        
        
    )
}