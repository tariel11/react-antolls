import React from 'react' 

import MyLogo from '../UI/MyLogo/MyLogo';

import style from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={style.nav}>   
      <MyLogo/>
      <ul className={style.ul}>                                  
        <li><a href='#!' >Home</a></li>
        <li>
          <a href='#!'>
            Categories
            <select >
              <option value="first"> 
              </option>
              <option value="second"></option>
            </select>
          </a>
          </li>
        <li><a href='#!' >My Collections</a></li>
        <li><a href='#!' >Blog</a></li>
      </ul>
      <div className={style.btns}>
        <button >Login</button>
        <button className='btn'>Sign Up</button>
      </div>  
    </nav>
  )
}

export default Navbar