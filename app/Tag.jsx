'use client'
import './globalStyles/components/tags.css'

const Tag = ({ changeTagState, id, active, category, name }) => {

    let color
    switch (category) {
        case 'field':
            color = 'blue'
            break
        case 'qualification':
            color = 'green'
            break
        case 'ability':
            color = 'orange'
            break
        case 'workstyle':
            color = 'red'
            break
    }

    const tagClass = active ? color : 'disabled'
    
    return (
        <div
            className={`tag ${tagClass}`}
            onClick={() => changeTagState ? changeTagState(id) : null}
        >{name}</div>
    )
}

export default Tag
