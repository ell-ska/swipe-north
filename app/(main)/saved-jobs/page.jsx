import Link from 'next/link'
import JobCards from './Jobcard'

export default function SavedJobs() {
  return (
    <>
      <h3 className='saved-jobs-title'>Sparade jobb</h3>
      <div className='job-card-container'>
        <Link href='/saved-jobs/see-more'>
          
            <JobCards />
          
        </Link>
      </div>
    </>
  );
}