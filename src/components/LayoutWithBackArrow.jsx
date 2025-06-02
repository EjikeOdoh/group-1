import { FaArrowLeft } from 'react-icons/fa'
import styles from '../styles/layoutBackArrow.module.css'

export default function LayoutWithBackArrow(props) {
  return (
    <div style={{backgroundColor: props.bg}} className={styles.container}>
        <div className={styles.nav}>
            <button className={styles.backBtn}>
                <FaArrowLeft size={16} />
                Back
            </button>
        </div>
        <div className={styles.content}>
        {props.children}

        </div>
    </div>
  )
}
