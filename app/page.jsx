'use client'
import { useState } from 'react'
import Header from './Header'
import SwipeButtons from './SwipeButtons'
import api from './dummyApi'
import './globalStyles/home.css'
import './globalStyles/components/buttons.css'
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
            <SwipeButtons />
        </div>
      </>
    )
}