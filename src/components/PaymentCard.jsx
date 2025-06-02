import { FaCheck } from 'react-icons/fa'
import styles from '../styles/paymentCard.module.css'
import Button from './Button'


export function Row(props) {
    return (
        <div className={styles.row}>
            <FaCheck size={18} style={{minWidth: "18px"}} />
            <p>{props.option}</p>
        </div>
    )
}

export default function PaymentCard(props) {

    const options = props.options.map(x=>(<Row option={x} />))

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.label}>
                    <h3>{props.label}</h3>
                    <p>{props.desc}</p>
                </div>

                <h1>${props.price}</h1>

                <div className={styles.options}>
                    {options}
                </div>
            </div>


            <Button label={props.cta} />
        </div>
    )
}
