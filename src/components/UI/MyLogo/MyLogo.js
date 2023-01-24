import React from 'react'

import logo from '../../../img/logo.svg'
import style from './MyLogo.module.scss'

const MyLogo = () => {
  return ( 
    <div className={style.logo}>
      <img src={logo} alt="logo" />
      <strong>antools.</strong>
    </div>
  )
}

export default MyLogo