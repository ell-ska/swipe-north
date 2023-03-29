'use client'
import Link from "next/link"
import Image from "next/image"
import Tag from "./Tag"
import trashcan from 'public/icons/trashcan.svg'
import arrowLeft from 'public/icons/arrow-left.svg'
import './globalStyles/see-more.css'
import './globalStyles/components/buttons.css'
import { savedJobsAtom } from "./atoms"
import { useAtom } from 'jotai'
import { useRouter } from "next/navigation"

const SeeMore = ({ companyName, jobTitle, shortDescription, linkToJobApplication, tags, img, id }) => {
    const [savedJobs, setSavedJobs] = useAtom(savedJobsAtom)
    const router = useRouter()
    const deleteJob = () => {
        const allExceptDeletedJob = savedJobs.filter(job => job.id !== id)
        setSavedJobs(allExceptDeletedJob)
        // window.location.pathname = '/saved-jobs'
        router.push('/saved-jobs') 
    } 

    return (
        <div className='see-more-container'> 
            <div className='see-more-image' style={{backgroundImage: `url(${img.src})`}}>
                <div className="see-more-overlay">
                    <Link href='/saved-jobs'><Image src={arrowLeft} alt='Gå tillbaka'/></Link>
                    <button className='trashcan' onClick = {() => deleteJob() }>
                        <Image src={trashcan} alt='Ta bort jobb'/>
                    </button>
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
    )
}

export default SeeMore