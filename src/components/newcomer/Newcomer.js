import React from 'react'

import Tool from '../tool/Tool'
import zeplin from '../../img/tools/zeplin.svg'
import phpstorm from '../../img/tools/phpstorm.svg'
import toolbox from '../../img/tools/toolbox.svg'
import procreate from '../../img/tools/procreate.svg'

import style from './Newcomer.module.scss'

const tools = [
  {
    img: zeplin,
    title: 'Zeplin',
    span: 'Free & Paid',
  },
  {
    img: phpstorm,
    title: 'PHPStorm',
    span: 'Free',
  },
  {
    img: toolbox,
    title: 'Toolbox',
    span: 'Free',
  },
  {
    img: procreate,
    title: 'Procreate',
    span: 'Paid',
  }
]

const Newcomer = () => {
  return (
    <div className={style.newcomer}>
        <div className={style.newcomer_text}>
          <h2>Newcomer Tools</h2>
          <p>Wow! see the latest update of the most <br /> recommended tools from reliable designers <br /> and developers</p>
          <button className="btn">Explore more</button>
        </div>
        <div className={style.newcomer_box}>
         {tools.map(tool => 
          <Tool
            key={tool.title}
            img={tool.img}
            title={tool.title}
            span={tool.span}
          />
          )}
        </div>
      </div>
  )
}

export default Newcomer