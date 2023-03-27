'use client'

// render out all tags
// activate tags
// save in local storage
// deactivate tags
// connected to jobs
// sorted alphabetically

const Tag = ({ children, color, changeTagState, id, active }) => {

    const tagClass = active ? color : 'disabled'
    
    return (
        <div
            className={`tag ${tagClass}`}
            onClick={() => changeTagState(id)}
        >{children}</div>
    )
}

export default Tag
