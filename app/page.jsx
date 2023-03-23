import './globalStyles/variables.css'
import './globalStyles/globals.css'
import './globalStyles/typography.css'
import './globalStyles/components/tags.css'
import './globalStyles/components/buttons.css'
import logo from '../public/icons/skelleftea-logo.svg'
import Image from 'next/image'
import styles from './globalStyles/components/login.module.css'
import Link from 'next/link'

export default function Login() {
  return (
    <div className={styles.loginComponent}>
        <div  className={styles.image}>
          <Image src={logo} alt='Skelleftea logo' width={125} height={67}/>
        </div>
        <div className={styles.loginContainer}>
            <Link href='/home'>
              <button className={`button ${styles.button}`}>Logga in</button>
            </Link>
            <button className={styles.createAccount}>Eller skapa ett konto</button>
        </div>
    </div>
  )
}
