import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <span><i className="fa-solid fa-dog fa-2xl"></i></span>
      <p>Dogs | Todos os direitos reservados | @willyan.cr</p>
    </div>
  )
}

export default Footer