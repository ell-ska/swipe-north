import Link from 'next/link'
import AllTags from '@/app/AllTags'
import '../welcome/welcome.css'
import '../../globalStyles/components/buttons.css'

export default function Welcome() {
    return (
      <div className='welcome-page'>
        <h1 className='welcome'>Välkommen!</h1>
        <h3 className='choose-tags'>Välj dina taggar</h3>
        <AllTags></AllTags>
        <Link href='/'><button className='button save-tags'>Spara</button></Link>
      </div>
    )
  }