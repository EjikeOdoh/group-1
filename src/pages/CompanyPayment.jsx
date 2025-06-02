import styles from '../styles/companyPayment.module.css'
import LayoutWithBackArrow from '../components/LayoutWithBackArrow'
import Step from '../images/step3.svg'
import PaymentCard from '../components/PaymentCard'

export default function CompanyPayment() {
    return (
        <LayoutWithBackArrow bg="var(--gray)">
            <div className={styles.container}>
                <div className={styles.step}>
                    <img src={Step} alt="" />
                </div>
                <div className={styles.cards}>
                    <PaymentCard
                        label="Professional Plan"
                        desc="Ideal for Growing teams or Midsize companies"
                        price={Number(35).toFixed(2)}
                        cta="Get Professional Plan"
                        options={["Full Company Mental Health Dashboard", "Unlimited mood check-ins & journaling",
                            "Unlimited wellness programs & scheduling",
                            "Group therapy session access",
                            "Mental health leave request tracking",
                            "Virtual Safe Room"
                        ]}
                    />
                    <PaymentCard
                        label="Enterprise Plan"
                        desc="Ideal for Large companies"
                        price={Number(60).toFixed(2)}
                        cta="Get Enterprise Plan"
                        options={["Includes all Professional features", "Unlimited therapist bookings",
                            "Monthly usage reports & quarterly wellness reports",
                            "Premium support (24/7 Responds)",
                            "1-on-1 therapist sessions (for employees)",
                          
                        ]}
                    />
                </div>
            </div>
        </LayoutWithBackArrow>
    )
}
