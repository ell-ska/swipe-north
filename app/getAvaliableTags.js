import { nanoid } from 'nanoid'
import api from './dummyApi'

const getAvailableTags = () => {

    let allAvailableTags = []
    let uniqueAvailableTags = []
    
    api.map(job => {
        allAvailableTags = allAvailableTags.concat(job.tags)
    })

    const uniqueTags = [...new Map(allAvailableTags.map(tag => [tag.name, tag])).values()]

    uniqueTags.map(tag => {
        uniqueAvailableTags = uniqueAvailableTags.concat({...tag, active: false, id: nanoid()})
    })

    return uniqueAvailableTags
}

export default getAvailableTags