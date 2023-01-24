import React from 'react' 
import MyLogo from '../UI/MyLogo/MyLogo'

import style from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={style.footer_wrap}>
      <div className="container">
        <div className={style.footer}>
        
          <div className={style.footer_item_logo}>
            <MyLogo/>
            <h4>Copyright 2021. Antools</h4>
            <p>Antool is a web collection of <br /> information on paid or free Design <br /> and Development tools</p>
          </div>
          <div className={style.footer_item}>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="tel:+621987463">+621987463</a>
              </li>
              <li>
                <a href="http://maps.google.com/?q=Memorial Dr, Cambridge, MA 02139, Соединенные Штаты">M Building, No.10 A</a>
              </li>
              <li>
                <a href="mailto:antools@awesome.com">antools@awesome.com</a>
              </li>
            </ul>          
          </div>
          <div className={style.footer_item}>
            <h3>Categories</h3>
            <ul>
              <li>
                <a href='#!'>Design</a>
              </li>
              <li>
                <a href='#!'>Development</a>
              </li>
            </ul>
          </div>
          <div className={style.footer_item}>
            <h3>Company Info</h3>
            <ul>
              <li>
                <a href='#!'>About Us</a>
              </li>
              <li>
                <a href='#!'>Our Partners</a>
              </li>
              <li>
                <a href='#!'>Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer