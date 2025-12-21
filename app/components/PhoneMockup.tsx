'use client'

import React from 'react'
import styles from './PhoneMockup.module.css'

interface PhoneMockupProps {
  children: React.ReactNode
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ children }) => {
  return (
    <div className={styles.phoneContainer}>
      <div className={styles.phoneFrame}>
        <div className={styles.phoneScreen}>
          <div className={styles.phoneScreenContent}>
            {children}
          </div>
        </div>
        <div className={styles.phoneHomeButton}></div>
      </div>
    </div>
  )
}

export default PhoneMockup

