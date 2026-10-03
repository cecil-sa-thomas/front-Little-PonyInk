import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useState } from 'react';
import { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import HomeIcon from "../ui/svg/HomeIcon";
import GalleryIcon from "../ui/svg/GalleryIcon";
import FlashIcon  from "../ui/svg/FlashIcon";
import ProjectIcon from "../ui/svg/ProjectIcon";
import FaqIcon from "../ui/svg/FaqIcon";
import BurgerIcon from "../ui/svg/BurgerIcon";
import InstagramIcon from "../ui/svg/InstagramIcon";
import CloseIcon from "../ui/svg/Close";

export default function Navbar (){
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/' // triple "="  -> check automatiquement si pathname = '/'


    const navListRef = useRef(null)
    const burgerRef = useRef(null)

    // Fermer le menu burger via "ref={menuRef}" à placer dans la bonne balise
    useEffect(() => {
        function handleClickOutside(event) {
            // Clic sur le bouton burger : ce n'est pas un clic "à l'extérieur", son onClick s'en occupe
            if (burgerRef.current && burgerRef.current.contains(event.target)) {
                return
            }
            // SI (la nav existe) ET (le clic n'est PAS dans la nav) → la variable permettant d'ouvrir le menu devient false
            if (navListRef.current && !navListRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return(
        <nav className={styles.nav}>
            <div>
                <a className={styles.navLogo} href="placeholder" target="_blank" rel="noreferrer">
                    Little PonyInk
                </a>
            </div>
            <ul ref={navListRef}  className={`${styles.navList} ${isOpen ? styles.listOpen : styles.listClosed}`}>
                
                <li>
                    <NavLink  to="/">
                        <HomeIcon className={styles.icon} height={24} width={24} color="var(--soft-pink)"/>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <div>
                        {isHome
                            ? <a href="#galerie">
                                <GalleryIcon className={styles.icon} height={24} width={24} color="var(--soft-pink)"/>
                                Galerie</a>
                            : <NavLink to="/#galerie"> {/* ancrage vers section galerie */}
                                <GalleryIcon className={styles.icon} height={24} width={24} color="var(--soft-pink)"/>
                                Galerie</NavLink >
                        }
                    </div>
                </li>
                <li><NavLink  to="/flash-galerie">
                    <FlashIcon className={styles.icon} height={24} width={24} color="var(--soft-pink)"/>
                        Flash Tattoo
                    </NavLink>
                </li>
                <li>
                    <NavLink  to="/projet-sur-mesure">
                    <ProjectIcon className={styles.icon} height={24} width={24} color="var(--soft-pink)"/>
                        Projet perso
                    </NavLink>
                </li>
                <li>
                    <NavLink  to="/faq">
                    <FaqIcon className={styles.icon} height={24} width={24} color="var(--soft-pink)"/>
                    FAQ
                    </NavLink>
                </li>
            </ul>
            <div className={styles.navInsta}>
                <a className={styles.instagram} href="https://www.instagram.com/littleponyink/" target="_blank" rel="noreferrer">
                        Instagram
                </a>
            </div>
            <div className={styles.navBurger}>
                <a className={styles.instaMobile} href="https://www.instagram.com/littleponyink/" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <InstagramIcon height={28} width={28} color="var(--blush)"/>
                </a>
                <button
                    ref={burgerRef}
                    className={styles.burger}
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={isOpen}>
                    {isOpen
                        ? <CloseIcon className={styles.icon} height={44} width={44} color="var(--soft-pink)"/>
                        : <BurgerIcon className={styles.icon} height={44} width={44} color="var(--soft-pink)"/>
                    }
                </button>
            </div>
        </nav>
    )
}