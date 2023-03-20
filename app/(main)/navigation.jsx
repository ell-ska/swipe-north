'use client'
import { useState } from "react"
import Link from "next/link"
import styles from './layout.module.css'
import logo from '../../public/icons/logo.svg'
import heart from '../../public/icons/heartFilled.svg'

// const [menu, setMenu] = useState('');

const handleClick = () => {

}

export default function Nav() {
    return (
        <>
            <Nav className={styles.navbar}>
                <div onClick={() => handleClick()} className={styles.navItem}>
                    <div className={styles.hamburgerMenuLine}></div>
                    <div className={styles.hamburgerMenuLine}></div>
                    <div className={styles.hamburgerMenuLine}></div>
                </div>
                <Link href='/home' className={styles.navItem}>{logo}</Link>
                <Link  href='/saved-jobs' className={styles.navItem}>{heart}</Link>
            </Nav>
        </>  
    )
}