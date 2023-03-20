import Link from 'next/link'

export default function Menu() {
    return (
        <>
        <div className='menu-items'>
            <Link href='/home'>Hem</Link>         
            <Link href='/saved-jobs'>Sparade jobb</Link>
            <Link href='/profile'>Mina taggar</Link>     
        </div>                            
       
        <div className='menu-container'>            
        </div>
        </>
    )
}