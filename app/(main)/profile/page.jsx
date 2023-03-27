import styles from './profile.module.css'
import '../../globalStyles/components/buttons.css'
import '../../globalStyles/components/tags.css'
import AllTags from '../../AllTags'

export default function Profile() {

    return (
           <div className={styles.container}>
                <h1 className={styles.h1}>Mina taggar</h1>
                <AllTags />
                <button className={`button ${styles.buttonAdded}`}>Spara</button>
           </div>
    )
}