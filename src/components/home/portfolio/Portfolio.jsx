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

    //1.L'état
    const [index, setIndex] = useState(0)

    // 2. Tes images
    const images = [
        image1, image2, image3, image4, image5, image6
    ]

    // 3. Les fonctions
    const next = () => setIndex((index + 1) % images.length)
    const prev = () => setIndex((index - 1 + images.length) % images.length)

    return (
        <section>
            <div className={styles.portfolio}>
                <TitleSection tag="portfolio" title="Flash & Projets personnalisés" />
                <div className={styles.carousel}>
                    <div
                        className={styles.inner}
                        style={{ transform: `translateX(-${index * 33.33}%)` }}
                    >
                        {images.map((img, i) => (
                            <div key={i} className={`${styles.slide} ${i === index ? styles.active : styles.inactive}`}>
                                <img src={img} alt="tattoo" />
                            </div>
                        ))}
                    </div>
                    <button onClick={prev}>←</button>
                    <button onClick={next}>→</button>
                </div>
            </div>
        </section>
    )
}