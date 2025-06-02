import React from 'react'
import styles from '../styles/individualSignIn.module.css'
import LayoutWithBackArrow from '../components/LayoutWithBackArrow'
import TButton from '../components/TButton'
import { AiOutlineApple, AiOutlineGoogle } from 'react-icons/ai'
import Input from '../components/Input'
import { EyeBtn } from './IndividualSignUp'
import Button from '../components/Button'
import Cover from '../images/cover3.png'
import Check from '../components/Check'

export default function IndividualSignIn() {
    return (
        <LayoutWithBackArrow>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.cover}>
                        <img src={Cover} />
                        <p>Let’s personalize your experience</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.top}>
                        <h1>Sign in to your Serenity account</h1>
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

                        <p>Forgot Password?</p>

                        <Button label="Sign Up" />

                        <Check
                            label="Remember Me"
                            small={true}
                        />
                    </form>


                </div>
            </div>
        </LayoutWithBackArrow>
    )
}
