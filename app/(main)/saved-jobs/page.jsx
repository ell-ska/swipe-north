'use client'
import Header from '@/app/Header'
import JobCard from './Jobcard'
import { useAtom } from 'jotai'
import { savedJobsAtom } from '@/app/atoms'
import './jobcards.css'
import '../../globalStyles/components/buttons.css'

export default function SavedJobs() {

  const [savedJobs] = useAtom(savedJobsAtom)
  console.log(savedJobs)

  return (
    <>
      <Header></Header>
      {savedJobs.length > 0 ? (
              <div className="saved-jobs">
              <h3 className='saved-jobs-title'>Sparade jobb</h3>
              <div className='job-card-container'>
                {savedJobs.map(job => <JobCard key={job.id} {...job}></JobCard>)}
              </div>
            </div>
      ) : (
        <div className='no-saved-jobs'>
          <h3 className='no-saved-job-title'>Du har inte sparat några jobb än!</h3>
          <button className='button find-job-button'>Hitta ditt drömjobb</button>
        </div>
      )}

    </>
  );
}