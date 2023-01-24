import React from 'react'

import style from './MyForm.module.scss'
// import searchIcon from '../../../img/icons/search.svg'

const MyForm = ({input, btn, img}) => {
  return (
    <form className={style.form}>
      <img src={img} alt="" />
      <input name="search" placeholder={input} type="text" />
      <button type="submit" className="btn">{btn}</button>
    </form>
  )
}

export default MyForm