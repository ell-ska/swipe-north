'use client'
import JobCard from './Jobcard'
import { useAtom } from 'jotai'
import { savedJobsAtom } from '@/app/atoms'

export default function SavedJobs() {

  const [savedJobs, setSavedJobs] = useAtom(savedJobsAtom)

  return (
    <>
      <h3 className='saved-jobs-title'>Sparade jobb</h3>
      <div className='job-card-container'>
        {savedJobs.map(job => {
          return <JobCard></JobCard>
        })}
      </div>
    </>
  );
}