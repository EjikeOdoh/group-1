
import { useRef, useState } from 'react'
import './App.css'
import Modal from './components/Modal'
import LandingPage from './pages/LandingPage'
import AccountSelection from './pages/AccountSelection'
import IndividualSignUp from './pages/IndividualSignUp'
import AccountCreation from './pages/AccountCreation'
import IndividualSignIn from './pages/IndividualSignIn'
import CompanyInfo from './pages/CompanyInfo'
import IndividualInfo from './pages/IndividualInfo'
import CompanyPayment from './pages/CompanyPayment'
import IndividualPayment from './pages/IndividualPayment'

function App() {

  return (
    <>

      {/* <LandingPage /> */}
      <AccountSelection />
      <IndividualSignUp />
      <AccountCreation />
      <IndividualSignIn />
      <CompanyInfo />
      <IndividualInfo />
      <CompanyPayment />
      <IndividualPayment />
    </>
  )
}

export default App
