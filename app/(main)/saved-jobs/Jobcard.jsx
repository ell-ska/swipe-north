import './jobcards.css'
import taxi from 'public/images/jobs/taxi-mobile.jpg'
import Link from 'next/link'
// import { savedJobsAtom } from '@/app/atoms'

export default function JobCards() {
    return (
        <Link href='/see-more'>
        <div className='jobcard'>
            <div className='job-card-image' style={{backgroundImage: `url(${taxi.src})`}}></div>
            <div className='card-description'>
                <p className='company-name'>Skellefteå Taxi</p>
                <p className='job-title'>Taxichaufför</p>
            </div>
        </div>
        </Link>
    )
}