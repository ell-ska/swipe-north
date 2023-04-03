import api from './dummyApi'

const getFilteredJobs = (tags, savedJobs) => {

    let filteredJobs = api
    const activeTags = tags.filter(tag => tag.active).map(tag => tag.name)

    // filter jobs according to tags
    if (activeTags.length > 0) {
        filteredJobs = api.filter(job => {
    
            const currentJobTags = job.tags.map(tag => tag.name)
            return currentJobTags.some(jobTag => activeTags.includes(jobTag))

        })
    }
    
    // remove already saved jobs from the newly filtered jobs
    if (savedJobs.length > 0) {
        savedJobs.map(savedJob => {
            filteredJobs = filteredJobs.filter(job => job.id !== savedJob.id)
        })
    }

    return filteredJobs

}

export default getFilteredJobs