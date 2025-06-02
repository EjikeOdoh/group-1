import styles from '../styles/accountCreation.module.css'
import LayoutWithBackArrow from '../components/LayoutWithBackArrow'
import Step from '../images/step1.svg'
import Cover from '../images/focused.png'
import { EyeBtn } from './IndividualSignUp'
import Check from '../components/Check'
import Input from '../components/Input'
import Button from '../components/Button'


export default function AccountCreation() {
    return (
        <LayoutWithBackArrow>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.step}>
                        <img src={Step} />
                    </div>

                    <div className={styles.cover}>
                        <img src={Cover} />
                        <p>Balance work and life with ease. unlock a calmer, more focused mind with personalized mental wellness tools.</p>
                    </div>


                </div>
                <div className={styles.right}>
                    <div className={styles.top}>
                        <h1>Account Creation</h1>
                    </div>
                    <form className={styles.myForm}>

                        <Input
                            label="Admin"
                            placeholder="Admin Username"
                        />

                        <Input
                            label="Email"
                            placeholder="Admin Email"
                        />
                        <Input
                            label="Password"
                            placeholder="Password"
                            notice="Must be at least 8 characters"
                            btn={<EyeBtn />}
                        />

                        <Input
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            notice="Must be at least 8 characters"
                            btn={<EyeBtn />}
                        />

                        <Input
                            label="Company code"
                            placeholder="Company code"
                        />

                        <Check
                            label="Agree to Terms of Service and Data Privacy Policy"
                            small={true}
                        />

                        <Button label="Continue" />
                    </form>
                </div>
            </div>
        </LayoutWithBackArrow>
    )
}
