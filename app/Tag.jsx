'use client'
import { useState } from 'react'
import api from './dummyApi'
import './globalStyles/components/tags.css'

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

export default Tag
