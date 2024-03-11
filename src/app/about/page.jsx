import Image from 'next/image'
import styles from './about.module.css'

const AboutPage = () => {
    return (
    <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/20165148/pexels-photo-20165148/free-photo-of-kaho.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill/>
    </div>
    
    )
}

export default AboutPage