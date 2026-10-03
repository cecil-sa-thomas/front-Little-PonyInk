import styles from './Portfolio.module.css'
import TitleSection from "../../title-section/TitleSection"
import { useState } from 'react'

import image1 from '../../../assets/images/carousel/images1.jpg'
import image2 from '../../../assets/images/carousel/images2.jpg'
import image3 from '../../../assets/images/carousel/images3.jpg'
import image4 from '../../../assets/images/carousel/images4.jpg'
import image5 from '../../../assets/images/carousel/images5.jpg'
import image6 from '../../../assets/images/carousel/images6.jpg'

export default function Portfolio(){

    // 1. Tes images à afficher.
    const images = [
        image1, image2, image3, image4, image5, image6
    ]
    //2.L'état, on démarre au milieu de la file
    const [index, setIndex] = useState(Math.floor(images.length / 2))

    // 3. Les fonctions
    const next = () => setIndex((index + 1) % images.length)
    const prev = () => setIndex((index - 1 + images.length) % images.length)

    return (
        <section>
            <div className={styles.portfolio}>
                <TitleSection tag="portfolio" title="Flash & Projets personnalisés" />
                <div className={styles.carousel}>
                    {/* Le décalage est calculé en CSS à partir de --index et de la largeur d'une slide */}
                    <div
                        className={styles.inner}
                        style={{ '--index': index }}
                    >
                        {images.map((img, i) => (
                            <div key={i} className={`${styles.slide} ${i === index ? styles.active : styles.inactive}`}>
                                <img src={img} alt="tattoo" />
                            </div>
                        ))}
                    </div>
                    <button className={`${styles.arrow} ${styles.prev}`} onClick={prev} aria-label="Image précédente">←</button>
                    <button className={`${styles.arrow} ${styles.next}`} onClick={next} aria-label="Image suivante">→</button>
                </div>
            </div>
        </section>
    )
}