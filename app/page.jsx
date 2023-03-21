import Tag from './Tag'
import './globalStyles/variables.css'
import './globalStyles/globals.css'
import './globalStyles/typography.css'
import './globalStyles/components/tags.css'
import './globalStyles/components/buttons.css'

export default function Home() {
  return (
    <div>
      First page of website
      <div>
        <Tag color='orange' isActive={true}>Test</Tag>
        <Tag color='green' isActive={false}>Test</Tag>
      </div>
    </div>
  )
}
