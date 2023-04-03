'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Menu from './Menu'
import styles from './globalStyles/header.module.css'
import logo from '../public/icons/skelleftea-logo.svg'
import heart from '../public/icons/heart-filled.svg'


function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const routerPath = usePathname()

    useEffect(() => {
        setMenuOpen(false)
    }, [routerPath])
    
    return (
        <>
            <div className={menuOpen ? `${styles.header} ${styles.headerOpen}` : styles.header}>
                <div onClick={() => {toggleMenu()}} className={`${styles.navItem} ${styles.hamburgerMenu}`}>
                    <div className={`${styles.hamburgerMenuLine}  ${menuOpen ? styles.positionLineOne : ''}`}></div>
                    <div className={`${styles.hamburgerMenuLine}  ${menuOpen ? styles.hide : ''}`}></div>
                    <div className={`${styles.hamburgerMenuLine}  ${menuOpen ? styles.positionLineThree : ''}`}></div>
                </div>
                <Link href='/' className={styles.navItem}>
                    <Image src={logo} alt='Skelleftea logo'/>
                </Link>
                <Link href='/saved-jobs' className={styles.navItem}>
                    <Image src={heart} alt='Saved jobs'/>
                </Link>
            </div>
            {menuOpen ? <Menu></Menu> : null}
        </>  
    )
}

export default Header