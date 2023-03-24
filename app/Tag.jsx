'use client'
import { useState } from 'react'

// render out all tags
// activate tags
// save in local storage
// deactivate tags
// connected to jobs
// sorted alphabetically

const Tag = ({ children, color }) => {

    const [isActive, setIsActive] = useState(false)
    const tagClass = isActive ? color : 'disabled'
    
    return (
        <div
            className={`tag ${tagClass}`}
            onClick={(e) => {
                setIsActive(!isActive)
            }}
        >{children}</div>
    )
}

<<<<<<< HEAD
const storeMyTags = (e) => {

    let allTags = getAvaliableTags()
    let updatedTags = []

    const addedTag = allTags.find(tag => tag.name === e.target.innerHTML)
    console.log(addedTag)
    
    // useEffect(() => {
    //     updatedTags.push(addedTag)
    //     localStorage.setItem('myTags', updatedTags)
    //     console.log(localStorage)
    // }, [e])

    // getAvaliableTags.forEach((tag) => {
        
    // })
    
    // let allTags = getAvaliableTags()

    // return allTags
    // useEffect(() => {
    //     localStorage.setItem('myTags', myTags())
    // }, [isActive])
}





const AllTags = () => {

    const avaliableTags = getAvaliableTags()
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
=======
export default Tag
>>>>>>> ella
