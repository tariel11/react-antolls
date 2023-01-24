import React from 'react'

import microsoft from '../../img/brands/microsoft.png'
import google from '../../img/brands/google.png'
import slack from '../../img/brands/slack.png'
import wordpress from '../../img/brands/wordpress.png'

import style from './Brands.module.scss'

const brands = [{ title: microsoft }, { title: google }, { title: slack }, { title: wordpress} ,]

const Brands = () => {
  return (
  <div className={style.brands}>
    <span className={style.bg}></span>
    <h3>Trusted more than 150+ brand</h3>
    <div className={style.brands_box}>
    {brands.map(brand => 
      <div key={brand.title}>
        <img src={brand.title} alt={brand.title} />
      </div>
    )} 
    </div>
  </div>
  )
}

export default Brands