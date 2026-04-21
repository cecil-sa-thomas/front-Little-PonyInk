import styles from './Footer.module.css'
import { FaInstagram } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import Separator from '../separator/Separator'

export default function Footer() {
    return (

    <footer className={styles.footer}>
        <div className={styles.footerTop}>
            <div className={styles.footerStudio}>
                <span>Studio</span>
                <h2>Little Pony Ink</h2>
            </div>
            <div className={styles.footerContact}>
                <span>Contact</span>
                <ul>
                    <li><BsFillGeoAltFill />Disneyland Paris 77000</li>
                    <li>
                        <a href="mailto:littleponyink@gmail.com">
                            <IoMdMail />littleponyink@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/littleponyink" target="_blank" rel="noreferrer">
                            <FaInstagram />@littleponyink
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <Separator />
        <div className={styles.footerBottom}>
            <p>&copy; 2026 Little Pony Ink</p>
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
            <p>Design & développement - Cécil Thomas</p>
        </div>
    </footer>
    )
}