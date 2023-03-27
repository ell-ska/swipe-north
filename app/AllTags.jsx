'use client'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import api from './dummyApi'
import Tag from './Tag'

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

const AllTags = () => {

    const [tags, setTags] = useState(() => {
        return JSON.parse(localStorage.getItem('tags')) || getAvailableTags()
    })
    
    useEffect(() => {
        localStorage.setItem('tags', JSON.stringify(tags))
    }, [tags])

    const changeTagState = (id) => {
        
        const updatedTag = tags.find(tag => tag.id === id)
        updatedTag.active = !updatedTag.active

        setTags([...tags])

    }

    return (
        <div className='tags-component'>
            <div className='tag-container-and-header'>
                <h3>Arbetsområden</h3>
                <div className="tag-container">
                    {tags.map(tag => tag.category === 'field' && <Tag key={tag.name} {...tag} changeTagState={changeTagState} color='blue'>{tag.name}</Tag>)}
                </div>
            </div>
            <div className='tag-container-and-header'>
                <h3>Meriter</h3>
                <div className="tag-container">
                    {tags.map(tag => tag.category === 'qualification' && <Tag key={tag.name} {...tag} changeTagState={changeTagState} color='green'>{tag.name}</Tag>)}
                </div>
            </div>
            <div className='tag-container-and-header'>
                <h3>Egenskaper</h3>
                <div className="tag-container">
                    {tags.map(tag => tag.category === 'ability' && <Tag key={tag.name} {...tag} changeTagState={changeTagState} color='orange'>{tag.name}</Tag>)}
                </div>
            </div>
            <div className='tag-container-and-header'>
                <h3>Arbetssätt</h3>
                <div className="tag-container">
                    {tags.map(tag => tag.category === 'workstyle' && <Tag key={tag.name} {...tag} changeTagState={changeTagState} color='red'>{tag.name}</Tag>)}
                </div>
            </div>
        </div>
    )
}

export default AllTags