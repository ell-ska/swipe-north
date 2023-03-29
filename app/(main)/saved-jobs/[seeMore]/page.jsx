'use client'
import Image from 'next/image'
import Link from 'next/link'
import Tag from '@/app/Tag'
import api from '@/app/dummyApi'
import trashcan from 'public/icons/trashcan.svg'
import arrowLeft from 'public/icons/arrow-left.svg'
import './see-more.css'
import '@/app/globalStyles/components/buttons.css'

export default function SeeMore({ params }) {
    const { seeMore: id } = params
    const { companyName, jobTitle, shortDescription, linkToJobApplication, tags, img} = api.find(job => job.id === id)

    return (
       <>
        <div className='see-more-container'> 
            <div className='see-more-image' style={{backgroundImage: `url(${img.src})`}}>
                <div className="see-more-overlay">
                    <Link href='/saved-jobs'><Image src={arrowLeft} alt='Gå tillbaka'/></Link>
                    <button className='trashcan'><Image src={trashcan} alt='Ta bort jobb'/></button>
                </div>
            </div>
            <div className='see-more-content'>
                <p className='see-more-job'>{companyName}</p>
                <p className='see-more-jobtitle'>{jobTitle}</p>
                <div className='see-more-tags'>
                    {tags.map(tag => <Tag key={tag.name} {...tag} active={true}></Tag>)}
                </div>
                <div className='see-more-description'>
                    <p className='see-more-beskrivning'>Beskrivning</p>
                    <p className='see-more-text'>{shortDescription}</p>
                </div>
                <Link href={linkToJobApplication}>
                    <button className='button see-more-button'>Sök jobbet</button>
                </Link>
            </div>
        </div>
       </>
    )
}