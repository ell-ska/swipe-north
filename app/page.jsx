'use client'
// import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import Header from './Header'
import SwipeButtons from './SwipeButtons'
// import api from './dummyApi'
import { avaliableJobsAtom } from './atoms'
import './globalStyles/home.css'
import './globalStyles/components/buttons.css'
import SwipeCard from './SwipeCard'

export default function Home() {

    // const [avaliableJobs, setAvaliableJobs] = useState(null)
    // useEffect(() => setAvaliableJobs(JSON.parse(localStorage.getItem('avaliable-jobs') || api)), [])
    const [avaliableJobs, setAvaliableJobs] = useAtom(avaliableJobsAtom)

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