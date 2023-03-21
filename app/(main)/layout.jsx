import Nav from "./navigation"
import Menu from "./Menu"

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <Menu />
            {children}
        </>
        
    )
}