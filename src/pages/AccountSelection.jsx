import React from 'react'
import styles from '../styles/accountSelection.module.css'
import LayoutWithBackArrow from '../components/LayoutWithBackArrow'
import Group from '../images/group.png'
import Person from '../images/person.png'


export default function AccountSelection() {
  return (
    <LayoutWithBackArrow bg="var(--gray)">

      <div className={styles.container}>
        <h1>Select Account Type</h1>
        <div className={styles.btns}>
          <button>
              <img src={Group} />
              <p>Company</p>
          </button>

          <button>
              <img src={Person} />
              <p>Individual</p>
          </button>
        </div>
      </div>
     
    </LayoutWithBackArrow>
  )
}
