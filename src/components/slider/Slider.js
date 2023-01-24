import React from 'react'

import man from '../../img/man.png'
import textbg from '../../img/icons/textbg.png'
import sliderbtn from '../../img/icons/slider_btn.svg'
import sliderbtn_active from '../../img/icons/slider_btn_active.svg'

import style from './Slider.module.scss'

const Slider = () => {
  return (
    <div className={style.slider}>
      <div className={style.slider_inner}>
        <div className={style.slider_item}>
          <img src={man} alt="man" /> 
          <p><img src={textbg} alt="textbg" className={style.textbg} />Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.</p>
        </div>
      </div>
      <button className={style.slider_btn_prev}>
        <img src={sliderbtn} alt="prev" />
      </button>
      <button className={style.slider_btn_next}>
        <img src={sliderbtn_active} alt="next" />
      </button>
      <div className={style.points}>
        <button className={style.point}></button>
        <button className={style.active}></button>
        <button className={style.point}></button> 
      </div>
    </div>
  )
}

export default Slider