'use client'
import api from './dummyApi'
import Tag from './Tag'

const getAvailableTags = () => {

    let allAvailableTags = []
    
    api.map(api => {
        allAvailableTags = allAvailableTags.concat(api.tags)
    })

    const uniqueTags = [...new Map(allAvailableTags.map(tag => [tag.name, tag])).values()]
    console.log(uniqueTags)

    let tagsNotActive = []

    uniqueTags.map((tag) => {
        tagsNotActive = tagsNotActive.concat({...tag, active: false})
        
    })
    console.log(tagsNotActive)

    return uniqueTags
}

const AllTags = () => {

    const availableTags = getAvailableTags()

    const storeMyTags = () => {

        let allTags = availableTags
        let updatedTags = []
    
        const addedTag = allTags.find(tag => tag.name === e.target.innerHTML)
        addedTag.active = true;
        console.log(addedTag)

        updatedTags.push(addedTag)
        
        setTags([...updatedTags])
        
    }

    const [tags, setTags] = useState(() => {
        return JSON.parse(localStorage.getItem('tags')) || updatedTags
    })
    
    useEffect(() => {
        // storeMyTags()
        localStorage.setItem('tags', JSON.stringify(tags))
    }, [tags])

    
    console.log(availableTags)

    return (
        <div className='tags-component'>
            <div className='tag-container-and-header'>
                <h3>Arbetsområden</h3>
                <div className="tag-container">
                    {availableTags.map(tag => tag.category === 'field' && <Tag key={tag.name} color='blue'>{tag.name}</Tag>)}
                </div>
            </div>
            <div className='tag-container-and-header'>
                <h3>Meriter</h3>
                <div className="tag-container">
                    {availableTags.map(tag => tag.category === 'qualification' && <Tag key={tag.name} color='green'>{tag.name}</Tag>)}
                </div>
            </div>
            <div className='tag-container-and-header'>
                <h3>Egenskaper</h3>
                <div className="tag-container">
                    {availableTags.map(tag => tag.category === 'ability' && <Tag key={tag.name} color='orange'>{tag.name}</Tag>)}
                </div>
            </div>
            <div className='tag-container-and-header'>
                <h3>Arbetssätt</h3>
                <div className="tag-container">
                    {availableTags.map(tag => tag.category === 'workstyle' && <Tag key={tag.name} color='red'>{tag.name}</Tag>)}
                </div>
            </div>
            
        </div>
    )
}

export default AllTags