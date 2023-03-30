import '../globalStyles/components/buttons.css'
import '../globalStyles/notfound.css'
// import Link from 'next/link'

export default function NotFound() {

    return (
        <>
        <div className='not-found-page'>
            <h3 className='not-found-title'>Oj oj oj!</h3>
            <p className='not-found-p'>Nu har du nog gått vilse, det är dags att gå hem igen</p>
                <button className='button not-found-button'>Tillbaka hem</button>
        </div>
        </>
    )
}