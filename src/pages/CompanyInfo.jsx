import styles from '../styles/companyInfo.module.css'
import LayoutWithBackArrow from '../components/LayoutWithBackArrow'
import Step from '../images/step2.svg'
import Cover from '../images/cover2.png'
import { EyeBtn } from './IndividualSignUp'
import Check from '../components/Check'
import Input from '../components/Input'
import Button from '../components/Button'


export default function CompanyInfo() {
    return (
        <LayoutWithBackArrow>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.step}>
                        <img src={Step} />
                    </div>

                    <div className={styles.cover}>
                        <img src={Cover} />
                        <p>Achieve work life harmony. Discover tailored strategies for mental well being and a 
                        healthier mind.</p>
                    </div>


                </div>
                <div className={styles.right}>
                    <div className={styles.top}>
                        <h1>Company Information</h1>
                    </div>
                    <form className={styles.myForm}>

                        <Input
                            label="Company Name"
                            placeholder="Company Name"
                        />

                        <Input
                            label="Number of Employees"
                            placeholder="Number of Employees"
                        />

<Input
                            label="Country/Region"
                            placeholder="Country/Region"
                        />

<Input
                            label="Email"
                            placeholder="Company's Email"
                        />
                       

   

                        <Button label="Create Account" />
                    </form>
                </div>
            </div>
        </LayoutWithBackArrow>
    )
}
