import Link from 'next/link'
import Header from './Header'
import './globalStyles/notfound.css'
import './globalStyles/components/buttons.css'

export default function NotFound() {
    return (
        <>
            <Header></Header>
            <div className='not-found-page'>
                <h3 className='not-found-title'>Oj oj oj!</h3>
                <p className='not-found-p'>Nu har du nog gått vilse, det är dags att gå hem igen</p>
                    <Link href='/'>
                        <div className='button not-found-button'>Tillbaka hem</div>
                    </Link>
            </div>
        </>
    )
}