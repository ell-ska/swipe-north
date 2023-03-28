'use client'
import './jobcards.css'
import Link from 'next/link'

export default function JobCards({img, companyName, jobTitle, id}) {
    return (
        <Link href={`saved-jobs/${id}`}>
            <div className='jobcard'>
                <div className='job-card-image' style={{backgroundImage: `url(${img.src})`}}></div>
                <div className='card-description'>
                    <p className='company-name'>{companyName}</p>
                    <p className='job-title'>{jobTitle}</p>
                </div>
            </div>
        </Link>
    )
}