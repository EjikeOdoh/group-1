import styles from '../styles/radio.module.css'

export default function Radio(props) {
    return (
        <div className={styles.container}>
            <input id={props.name} name={props.name} value={props.value} type='radio' />
            <label htmlFor={props.name}>{props.label}</label>
        </div>
    )
}
