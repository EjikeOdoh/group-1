import styles from '../styles/navbar.module.css'

import Logo from '../images/logo.svg'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <img src={Logo} alt="Logo" />
        </div>
        <div className={styles.menu}></div>
        <div></div>
    </nav>
  )
}
