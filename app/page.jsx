'use client'
import { useState } from 'react'
import Image from 'next/image'
import Header from './Header'
import api from './dummyApi'
import './globalStyles/home.css'
import './globalStyles/components/buttons.css'
import heartIcon from 'public/icons/heart-outlined.svg'
import returnIcon from 'public/icons/return.svg'
import crossIcon from 'public/icons/cross.svg'
import SwipeCard from './SwipeCard'

export default function Home() {

    const [avaliableJobs, setAvaliableJobs] = useState(() => api)

    return (
      <>
        <Header></Header>
        <div className='home'>
              <div className="swipe-container">
                  {avaliableJobs.map(job => <SwipeCard key={job.jobTitle} {...job} avaliableJobs={avaliableJobs} setAvaliableJobs={setAvaliableJobs}></SwipeCard>)}
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
      </>
    )
}