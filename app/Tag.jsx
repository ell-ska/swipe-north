const Tag = ({ children, color, isActive }) => {
    const tagClass = isActive ? color : 'disabled'
    return <div className={`tag ${tagClass}`}>{children}</div>
}

export default Tag