import Nav from "./navigation"

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            {children}
        </>
        
    )
}