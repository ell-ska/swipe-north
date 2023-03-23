'use client'
import { useEffect, useState } from 'react'
import api from './dummyApi'

// render out all tags
// activate tags
// save in local storage
// deactivate tags
// connected to jobs
// sorted alphabetically


const Tag = ({ children, color }) => {

    const [isActive, setIsActive] = useState(false)
    const tagClass = isActive ? color : 'disabled'
    console.log(isActive)
    
    return (
        <div
            className={`tag ${tagClass}`}
            onClick={(e) => {
                storeMyTags(e)
                setIsActive(!isActive)
            }}
        >{children}</div>
    )
}

const AllTags = () => {

    const getAvaliableTags = () => {

        let allAvaliableTags = []
        api.map(api => {
            // console.log(api.tags)
            // ({...job.tags, active: false}) 
            // job.tags.active = false
            // const jobWithStatusActive = {...tags, active: false}
            allAvaliableTags = allAvaliableTags.concat(api.tags)
            
        })
    
        const uniqueTags = [...new Map(allAvaliableTags.map(tag => [tag.name, tag])).values()]
        console.log(uniqueTags)

        let tagsNotActive = []

        uniqueTags.map((tag) => {
            tagsNotActive = tagsNotActive.concat({...tag, active: false})
            
        })
        console.log(tagsNotActive)

        return uniqueTags
    }

    const avaliableTags = getAvaliableTags()

    const storeMyTags = (e) => {

        let allTags = avaliableTags
        let updatedTags = []
    
        const addedTag = allTags.find(tag => tag.name === e.target.innerHTML)
        addedTag.active = true;
        console.log(addedTag)

        updatedTags.push(addedTag)
        
        setTags([...avaliableTags])
        
    }

    const [tags, setTags] = useState(() => {
        return JSON.parse(localStorage.getItem('tags')) || avaliableTags
    })
    
    useEffect(() => {
        
        localStorage.setItem('tags', JSON.stringify(tags))
    }, [tags])

    
    console.log(avaliableTags)

    return (
        <div className='tags-component'>
            <div className='tag-container-and-header'>
                <h3>Arbetsområden</h3>
                <div className="tag-container">
                    {avaliableTags.map(tag => tag.category === 'field' && <Tag key={tag.name} color='blue'>{tag.name}</Tag>)}
                </div>
            </div>
            <div className='tag-container-and-header'>
                <h3>Meriter</h3>
                <div className="tag-container">
                    {avaliableTags.map(tag => tag.category === 'qualification' && <Tag key={tag.name} color='green'>{tag.name}</Tag>)}
                </div>
            </div>
            <div className='tag-container-and-header'>
                <h3>Egenskaper</h3>
                <div className="tag-container">
                    {avaliableTags.map(tag => tag.category === 'ability' && <Tag key={tag.name} color='orange'>{tag.name}</Tag>)}
                </div>
            </div>
            <div className='tag-container-and-header'>
                <h3>Arbetssätt</h3>
                <div className="tag-container">
                    {avaliableTags.map(tag => tag.category === 'workstyle' && <Tag key={tag.name} color='red'>{tag.name}</Tag>)}
                </div>
            </div>
            
        </div>
    )
}

export { Tag, AllTags }