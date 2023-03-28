'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useAtom } from 'jotai'
import { loggedInAtom } from '@/app/atoms'
import '../../globalStyles/variables.css'
import '../../globalStyles/globals.css'
import '../../globalStyles/typography.css'
import '../../globalStyles/components/tags.css'
import '../../globalStyles/components/buttons.css'
import styles from './login.module.css'
import logo from 'public/icons/skelleftea-logo.svg'

export default function Login() {

  const [isLoggedIn, setIsLoggedIn] = useAtom(loggedInAtom)
  setIsLoggedIn(true)

  return (
    <div className={styles.loginComponent}>
        <div  className={styles.image}>
          <Image src={logo} alt='Skelleftea logo' width={125} height={67}/>
        </div>
        <div className={styles.loginContainer}>
            <Link href='/welcome'>
              <button className={`button ${styles.button}`}>Logga in</button>
            </Link>
            <button className={styles.createAccount}>Eller skapa ett konto</button>
        </div>
    </div>
  )
}