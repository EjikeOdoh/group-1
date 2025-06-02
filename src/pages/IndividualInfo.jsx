import styles from '../styles/individualInfo.module.css'
import LayoutWithBackArrow from '../components/LayoutWithBackArrow'
import Step from '../images/step2.svg'
import Cover from '../images/cover1.png'
import Check from '../components/Check'
import Button from '../components/Button'
import Radio from '../components/Radio'


export default function IndividualInfo() {
    return (
        <LayoutWithBackArrow>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.step}>
                        <img src={Step} />
                    </div>

                    <div className={styles.cover}>
                        <img src={Cover} />
                        <p>Your Journey to better mental health starts here</p>
                    </div>


                </div>
                <div className={styles.right}>
                    <div className={styles.top}>
                        <h1>Company Information</h1>
                    </div>
                    <form className={styles.myForm}>

                        <div className={styles.question}>
                            <p>Work Environment</p>
                            <div className={styles.options}>
                                <Radio label="Remote" />
                                <Radio label="Hybrid" />

                                <Radio label="Onsite" />

                            </div>
                        </div>

                        <div className={styles.question}>
                            <p>Personal Challenges</p>
                            <div className={styles.options}>
                                <Check label="Sleep" />
                                <Check label="Focus" />
                                <Check label="Anxiety" />
                                <Check label="Loneliness" />
                                <Check label="Burnout" />
                            </div>
                        </div> 

                        <Button label="Continue" />
                    </form>
                </div>
            </div>
        </LayoutWithBackArrow>
    )
}
