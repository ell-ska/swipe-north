import api from './dummyApi'

const getFilteredJobs = (tags, savedJobs) => {

    let filteredJobs = api
    const activeTags = tags.filter(tag => tag.active).map(tag => tag.name)

    if (activeTags.length > 0) {

        filteredJobs = api.filter(job => {
    
            const jobTags = job.tags.map(tag => tag.name)
    
            return jobTags.some(jobTag => {
    
                const tag = tags.find(tag => tag.name == jobTag)
    
                return (
                    tag && activeTags.includes(jobTag)
                )
    
            })
    
        })

    }

    let filteredJobsWithoutSavedJobs = filteredJobs
    
    if (savedJobs.length > 0) {
        savedJobs.map(savedJob => {
            filteredJobsWithoutSavedJobs = filteredJobsWithoutSavedJobs.filter(job => job.id !== savedJob.id)
        })
    }

    return filteredJobsWithoutSavedJobs

}

export default getFilteredJobs