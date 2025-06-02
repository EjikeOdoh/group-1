import styles from '../styles/tBtn.module.css'

export default function TButton(props) {
  return (
    <button className={styles.btn}>{props.icon} {props.label}</button>
  )
}
