'use client'
import { useAtom } from 'jotai'
import { tagsAtom, avaliableJobsAtom, savedJobsAtom } from './atoms'
import Tag from './Tag'
import getFilteredJobs from './getFilteredJobs'

const AllTags = () => {

    const [tags, setTags] = useAtom(tagsAtom)
    const [avaliableJobs, setAvaliableJobs] = useAtom(avaliableJobsAtom)
    const [savedJobs] = useAtom(savedJobsAtom)

    const changeTagState = (id) => {
        
        const tagToUpdate = tags.find(tag => tag.id === id)
        tagToUpdate.active = !tagToUpdate.active

        setTags([...tags])

        const newAvaliableJobs = getFilteredJobs(tags, savedJobs)
        setAvaliableJobs(newAvaliableJobs)

    }

    return (
        <div className='tags-component'>
            <div className='tag-container-and-header'>
                <h3>Arbetsområden</h3>
                <div className="tag-container">
                    {tags && tags.map(tag => tag.category === 'field' && <Tag key={tag.name} {...tag} changeTagState={changeTagState} ></Tag>)}
                </div>
            </div>
            <div className='tag-container-and-header'>
                <h3>Meriter</h3>
                <div className="tag-container">
                    {tags && tags.map(tag => tag.category === 'qualification' && <Tag key={tag.name} {...tag} changeTagState={changeTagState} ></Tag>)}
                </div>
            </div>
            <div className='tag-container-and-header'>
                <h3>Egenskaper</h3>
                <div className="tag-container">
                    {tags && tags.map(tag => tag.category === 'ability' && <Tag key={tag.name} {...tag} changeTagState={changeTagState} ></Tag>)}
                </div>
            </div>
            <div className='tag-container-and-header'>
                <h3>Arbetssätt</h3>
                <div className="tag-container">
                    {tags && tags.map(tag => tag.category === 'workstyle' && <Tag key={tag.name} {...tag} changeTagState={changeTagState} ></Tag>)}
                </div>
            </div>
        </div>
    )
}

export default AllTags