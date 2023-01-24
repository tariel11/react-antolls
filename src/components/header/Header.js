import React from 'react'

import bg from '../../img/bg.png'
import fb from '../../img/icons/fb.svg'
import ins from '../../img/icons/ins.svg'
import tw from '../../img/icons/tw.svg'
import MyForm from '../UI/MyForm/MyForm'
import searchIcon from '../../img/icons/search.svg'

import style from './Header.module.scss'

const Header = () => {
  return (
      <header > 
        <div className={style.header_container}> 
          <div className={style.header}> 
            <div className={style.content}>
              <h1>Awesome tools for <br /> Designer & Developer.</h1>
              <p>Antool is a web collection of information on paid or <br /> free Design and Development tools</p>
              <MyForm
                input={'find more than 430+ tools...'}
                btn={'Search'}
                img={searchIcon}
              />
              <div className={style.social}>
                <a href="#!"><img src={fb} alt="facebook" /></a>
                <a href="#!"><img src={ins} alt="instagram" /></a>
                <a href="#!"><img src={tw} alt="twitter" /></a>
              </div>
            </div>
            <div className={style.header_bg}>
              <img src={bg} alt="bg" />
            </div>  
          </div>
        </div>
      </header>
  )
}

export default Header