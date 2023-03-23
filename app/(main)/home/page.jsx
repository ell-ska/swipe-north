'use client'
import Image from 'next/image'
import api from '@/app/dummyApi'
import'./home.css'
import '../../globalStyles/components/buttons.css'
import heartIcon from 'public/icons/heart-outlined.svg'
import returnIcon from 'public/icons/return.svg'
import crossIcon from 'public/icons/cross.svg'
import SwipeCard from './SwipeCard'

export default function Home() {

    return (
       <div className='home'>
            <div className="swipe-container">
                {api.map(job => <SwipeCard key={job.jobTitle} {...job}></SwipeCard>)}
            </div>
            <div className="buttons">
                <button className="button icon">
                    <Image src={returnIcon} alt="Ångra"></Image>
                </button>
                <button className="button icon">
                    <Image src={heartIcon} alt="Spara jobb"></Image>
                </button>
                <button className="button icon">
                    <Image src={crossIcon} alt="Spara inte jobb"></Image>
                </button>
            </div>
       </div>
    )
}