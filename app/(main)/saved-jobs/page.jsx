'use client'
import { useAtom } from 'jotai'
import { savedJobsAtom } from '@/app/atoms'
import Header from '@/app/Header'
import JobCard from './Jobcard'
import './jobcards.css'

export default function SavedJobs() {

  const [savedJobs] = useAtom(savedJobsAtom)

  return (
    <>
      <Header></Header>
      <div className="saved-jobs">
        <h3 className='saved-jobs-title'>Sparade jobb</h3>
        <div className='job-card-container'>
          {savedJobs.map(job => <JobCard key={job.id} {...job}></JobCard>)}
        </div>
      </div>
    </>
  );
}