import Link from 'next/link'
import Image from 'next/image'
import SeeMore from '../SeeMore'
import SwipeButtons from '../SwipeButtons'
import api from '../dummyApi'
import styles from './seeMoreSwipe.module.css'
import arrowLeft from 'public/icons/arrow-left.svg'

export default function HomeSeeMore({ params }) {
    const { seeMore: id } = params
    const currentJob = api.find(job => job.id === id)

    return (
        <SeeMore {...currentJob} ></SeeMore>
        // <>  
        //     <div className={styles.imageContainer}>
        //         <Image className={styles.image} src={(api[0].img)} alt='test'/>
        //         <Link href='/home' className={styles.arrow}>
        //             <Image className={styles.arrowLeft} src={arrowLeft} alt='arrow-left' />
        //         </Link>
        //     </div>
        //     <div className={styles.contentContainer}>
        //         <div className={styles.firstInfoContainer}>
        //             <div className={styles.nameAndJobTitle}>
        //                 <h2 className={styles.companyName}>{api[0].companyName}</h2>
        //                 <h3 className={styles.jobTitle}>{api[0].jobTitle}</h3>
        //             </div>
        //             <div className={styles.tags}>
        //                 {api[0].tags.map((tag) => {
        //                     return (
        //                         <div key={tag.name}>
        //                             {tag.name}
        //                         </div> 
        //                     )
        //                 })}
        //             </div>
                    
        //         </div>
        //         <div className={styles.descriptionContainer}>
        //             <h3 className={styles.descriptionHeader}>Beskrivning</h3>
        //             <p className={styles.description}>{api[0].shortDescription}</p>
        //         </div>
        //         <div  className={styles.buttonsContainer}>
        //             <SwipeButtons></SwipeButtons>
        //         </div>
                
        //         <Link href={api[0].linkToJobApplication} className={styles.buttonContainer}>
        //             <button className={`button ${styles.buttonWidth}`}>Sök jobbet</button>
        //         </Link>
                
        //     </div>
            
        // </>
    )
}