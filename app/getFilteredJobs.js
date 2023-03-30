import api from './dummyApi'

const getFilteredJobs = (tags) => {

    const activeTags = tags.filter(tag => tag.active).map(tag => tag.name)

    const filteredJobs = api.filter(job => {

        const jobTags = job.tags.map(tag => tag.name)

        return jobTags.some(jobTag => {

            const tag = tags.find(tag => tag.name == jobTag)

            return (
                tag && activeTags.includes(jobTag)
            )

        })

    })

    return filteredJobs

}

export default getFilteredJobs