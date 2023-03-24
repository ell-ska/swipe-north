import Link from 'next/link'
import { usePathname } from 'next/navigation'
import '../globalStyles/components/Menu.css'

export default function Menu() {
    const routerPath = usePathname()

    return (
        <div className='menu'>   
            <div className={routerPath === '/home' ? 'menu-item menu-item--active' : 'menu-item'}>
                <Link href='/home'>Hem</Link>
            </div>         
            <div className={routerPath === '/saved-jobs' ? 'menu-item menu-item--active' : 'menu-item'}>
                <Link href='/saved-jobs'>Sparade jobb</Link>
            </div>
            <div className={routerPath === '/profile' ? 'menu-item menu-item--active' : 'menu-item'}>
                <Link href='/profile'>Mina taggar</Link>
            </div>                       
        </div>
    )
}