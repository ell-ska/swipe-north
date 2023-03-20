import Link from 'next/link'
import '../globalStyles/components/Menu.css'

export default function Menu() {
    return (
        <>
        <div className='menu-items'>
            <div className='home-link'>
                <Link href='/home'>Hem</Link>
            </div>         
            <div className='saved-link'>
                <Link href='/saved-jobs'>Sparade jobb</Link>
            </div>
            <div className='tags-link'>
                <Link href='/profile'>Mina taggar</Link>
            </div>     
        </div>                            
       
        <div className='menu-container'>            
        </div>
        </>
    )
}