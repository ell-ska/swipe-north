'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from '../globalStyles/components/navigation.module.css'
import logo from '../../public/icons/skelleftea-logo.svg'
import heart from '../../public/icons/heart-filled.svg'

function Nav() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    
    return (
        <>
            <div className={styles.navbar}>
                <div onClick={() => {toggleMenu()}} className={`${styles.navItem} ${styles.hamburgerMenu} ${menuOpen ? styles.active : ''}`}>
                    <div className={`${styles.hamburgerMenuLine}  ${menuOpen ? styles.positionLineOne : ''}`}></div>
                    <div className={`${styles.hamburgerMenuLine}  ${menuOpen ? styles.hide : ''}`}></div>
                    <div className={`${styles.hamburgerMenuLine}  ${menuOpen ? styles.positionLineThree : ''}`}></div>
                </div>
                <Link href='/home' className={styles.navItem}>
                    <Image src={logo} alt='Skelleftea logo'/>
                </Link>
                <Link href='/saved-jobs' className={styles.navItem}>
                    <Image src={heart} alt='Saved jobs'/>
                </Link>
            </div>
        </>  
    )
}

export default Nav