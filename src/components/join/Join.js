import React from 'react'
import MyForm from '../UI/MyForm/MyForm'

import style from './Join.module.scss'

const Join = () => {
  return (
     <div className={style.join}>
        <h2>Become a contributor?</h2>
        <p>Join us and get tips & tricks to become a great <br /> Designer and Developer</p>
        <MyForm
            input={'Enter your email...'}
            btn={'Join Us'}
          />
      </div>
  )
}

export default Join