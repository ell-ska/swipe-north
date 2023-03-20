import './globalStyles/variables.css'
import './globalStyles/globals.css'
import './globalStyles/typography.css'
import './globalStyles/components/tags.css'

export default function Home() {
  return (
    <div>
      First page of website
      <div className="tag">Körkort</div>
      <div className="tag disabled">Körkort</div>
      <div className="tag green">Körkort</div>
    </div>
  )
}
