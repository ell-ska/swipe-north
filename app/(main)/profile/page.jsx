import styles from './profile.module.css'
import '../../globalStyles/components/buttons.css'
import '../../globalStyles/components/tags.css'

export default function Profile() {

    const categories = ['Arbetsområde', 'Meriter', 'Egenskaper', 'Arbetssätt']

    return (
       <div className={styles.container}>
            <h1 className={styles.h1}>Mina taggar</h1>
            {categories.map((category) => {
                return (
                    <div key={category} className={styles.tagContainer}>
                        <h3 className={styles.h3}>{category}</h3>
                        <div className={styles.tags}></div>
                    </div>
                )
            })}
            
            <button className={`button ${styles.buttonAdded}`}>Spara</button>
       </div> 
    )
}