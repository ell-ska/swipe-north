'use client'
import { useState } from 'react'
import { useAtom } from 'jotai'
import { savedJobsAtom, loggedInAtom, avaliableJobsAtom } from './atoms'
import Header from './Header'
import SwipeButtons from './SwipeButtons'
import SwipeCard from './SwipeCard'
import './globalStyles/home.css'
import './globalStyles/components/buttons.css'

export default function Home() {

    const [isLoggedIn] = useAtom(loggedInAtom)
    const [avaliableJobs, setAvaliableJobs] = useAtom(avaliableJobsAtom)
    const [savedJobs, setSavedJobs] = useAtom(savedJobsAtom)
    const [previousJob, setPreviousJob] = useState(null)
    const currentJob = avaliableJobs[avaliableJobs.length - 1]

    const onGoBack = () => {
        if (previousJob && !avaliableJobs.find(job => job.id === previousJob.id)) {
            setAvaliableJobs([...avaliableJobs, previousJob])

            const newSavedJobs = savedJobs.filter(job => job.id !== previousJob.id)
            setSavedJobs(newSavedJobs)
        }
    }

    const onSwipe = (direction, id) => {

        if (!isLoggedIn) {
            window.location.pathname = '/login'
            return
        }

        const currentJob = avaliableJobs.find(job => job.id === id)
        
        if (direction === 'up') {
            setSavedJobs([...savedJobs, currentJob])
        }
        
        const remainingJobs = avaliableJobs.filter(job => job.id != id)
        setAvaliableJobs(remainingJobs)
        setPreviousJob(currentJob)

    }

    return (
      <>
        <Header></Header>
        <div className='home'>
            <div className="swipe-container">
                {avaliableJobs.map(job => <SwipeCard key={job.jobTitle} {...job} onSwipe={onSwipe} ></SwipeCard>)}
            </div>
            <SwipeButtons onSwipe={onSwipe} currentJob={currentJob} onGoBack={onGoBack} />
        </div>
      </>
    )
}