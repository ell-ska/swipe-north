import Header from '../Header'
import '../globalStyles/globals.css'
import '../globalStyles/variables.css'
import '../globalStyles/typography.css'

export default function RootLayout({ children }) {
  return (
    <>
        <Header></Header>
        {children}
    </>
  )
}