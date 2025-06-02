import styles from '../styles/check.module.css'

export default function Check(props) {
    return (
        <div className={styles.container}>
            <input id={props.name} name={props.name} value={props.value} type='checkbox' />
            <label style={props.small ? { fontSize: "0.875rem" } : undefined} htmlFor={props.name}>{props.label}</label>
        </div>
    )
}
