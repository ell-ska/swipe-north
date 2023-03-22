import Nav from "./Header"
import '../globalStyles/globals.css'
import '../globalStyles/variables.css'
import '../globalStyles/typography.css'

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            {children}
        </>
        
    )
}