import styles from '../styles/individualSignUp.module.css'
import LayoutWithBackArrow from '../components/LayoutWithBackArrow'
import Step from '../images/step1.svg'
import Cover from '../images/cover4.png'
import TButton from '../components/TButton'
import { AiOutlineApple, AiOutlineGoogle } from 'react-icons/ai'
import Input from '../components/Input'
import Button from '../components/Button'
import Check from '../components/Check'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

export function EyeBtn(props) {
    return(
        <button className={styles.eyeBtn} type="button">
           { props.isShown ?  <FaEyeSlash />: <FaEye />}
        </button>
    )
}

export default function IndividualSignUp() {
    return (
        <LayoutWithBackArrow>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div className={styles.step}>
                            <img src={Step} />
                        </div>

                        <div className={styles.cover}>
                            <img src={Cover} />
                            <p>Let’s get started on your path to wellness</p>
                        </div>


                    </div>
                    <div className={styles.right}>
                        <div className={styles.top}>
                            <h1>Sign Up with Serenity</h1>
                            <div className={styles.btns}>
                                <TButton
                                    icon={<AiOutlineGoogle />}
                                    label="Sign up with Google" />

                                <TButton
                                    icon={<AiOutlineApple />}
                                    label="Sign up with Apple" />
                            </div>
                            <p>Or</p>
                        </div>
                        <form className={styles.myForm}>
                            <div className={styles.inputs}>
                                <Input
                                    label="First Name"
                                    placeholder="First Name"
                                />

                                <Input
                                    label="Last Name"
                                    placeholder="Last Name"
                                />
                            </div>
                            <Input
                                label="Email"
                                placeholder="Email"
                            />
                            <Input
                                label="Password"
                                placeholder="Password"
                                notice="Must be at least 8 characters"
                                btn={<EyeBtn />}
                            />

                            <Input
                                label="Company code"
                                placeholder="Company code"
                            />

                            <Button label="Sign Up" />
                        </form>

                        <Check
                            label="Agree to Terms of Service and Data Privacy Policy"
                            small={true}
                        />

                        <p>Already have an Account? <span>Sign In</span></p>
                    </div>
                </div>
        </LayoutWithBackArrow>
    )
}
