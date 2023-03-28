import './globalStyles/globals.css'
import './globalStyles/variables.css'
import './globalStyles/typography.css'

export const metadata = {
  title: 'Swipe North',
  description: 'Swipe North och hitta ditt nya drömjobb',
  icons: {
    icon: '/icons/favicon.svg'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}