import React, { useState } from 'react'

import likeIcon from '../../img/icons/like.svg'
import no_likeIcon from '../../img/icons/no_like.svg'
import folder from '../../img/icons/folder.svg' 
import style from './Tool.module.scss'

const Tool = ({img, title, span, text}) => {
  const [like, setLike] = useState(false)

  const handleLike = like => like ? setLike(false) : setLike(true)

  return (
    <div className={style.tool}>
      <span className={style.bg}></span>
      <div className={style.title_box}>
        <img src={img} alt="" />
        <div className={style.title}>
          <h3>{title}</h3>
          <span>{span}</span>
        </div>
      </div>
      <p className={style.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className={style.icons}>
        <button>
          <img onClick={()=>handleLike(like)} src={like ? likeIcon : no_likeIcon} alt="like" className={like ? style.liked : style.like}/>
        </button>
        <button>
          <img src={folder} alt="" />
        </button>
        <button id={style.btn} className={style.btn}>Visit</button>
      </div>
    </div>
  )
}

export default Tool