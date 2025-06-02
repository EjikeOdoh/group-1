import styles from '../styles/companyPayment.module.css'
import LayoutWithBackArrow from '../components/LayoutWithBackArrow'
import Step from '../images/step3.svg'
import PaymentCard from '../components/PaymentCard'

export default function IndividualPayment() {
    return (
        <LayoutWithBackArrow bg="var(--gray)">
            <div className={styles.container}>
                <div className={styles.step}>
                    <img src={Step} alt="" />
                </div>
                <div className={styles.cards}>
                    <PaymentCard
                        label="Free Basic Plan"
                        desc="Individuals exploring the platform"
                        price={Number(0).toFixed(2)}
                        cta="Get Started Free"
                        options={["Daily mood check-ins & mental health journaling",
                            "Limited Virtural Safe Room access",
                            "Access to select mental health guides & articles",
                            "1 monthly support chat session"
                        ]}
                    />
                    <PaymentCard
                        label="Plus Plan"
                        desc="Individuals wanting wellness access"
                        price={Number(10).toFixed(2)}
                        cta="Get Plus Plan"
                        options={["Full access to Virtual Safe Room (meditation, breathing tools, therapist booking)",
                            "Full journaling & mood history tracking",
                            "1-on-1 therapist session",
                            "1 monthly support chat session",

                        ]}
                    />
                    <PaymentCard
                        label="Premium Plan"
                        desc="Individuals seeking support & personalize care"
                        price={Number(18).toFixed(2)}
                        cta="Get Premium Plan"
                        options={["A therapy session per month",
                            "Full access Virtual Safe Room",
                            "Full journaling & mood history tracking",
                            "4 monthly support chat session",

                        ]}
                    />
                </div>
            </div>
        </LayoutWithBackArrow>
    )
}
