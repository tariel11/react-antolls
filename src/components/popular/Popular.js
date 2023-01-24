import React from 'react'

import figma from '../../img/tools/figma.svg'
import notion from '../../img/tools/notion.svg'
import sketch from '../../img/tools/sketch.svg'
import vscode from '../../img/tools/vscode.svg'
import slack from '../../img/tools/slack.svg'
import invision from '../../img/tools/invision.svg'
import Tool from '../tool/Tool'

import style from './Popular.module.scss'

const tools = [
  {
    img: figma,
    title: 'FIGMA',
    span: 'Free',
  },
  {
    img: sketch,
    title: 'Sketch',
    span: 'Trial & Paid',
  },
  {
    img: vscode,
    title: 'Visual Studio Code',
    span: 'Free',
  },
  {
    img: notion,
    title: 'Notion',
    span: 'Free & Paid',
  },
  {
    img: slack,
    title: 'Slack',
    span: 'Free & Paid',
  },
  {
    img: invision,
    title: 'Invision',
    span: 'Free & Paid',
  },
]

const Popular = () => {
  return ( 
     <div className={style.popular}>
        <h2>Most Popular Tools</h2>
        <p className={style.p}>Tools for the best Designers and Developers most popularly used in the world</p>
        <div className={style.popular_box}>
      {tools.map(tool => 
        <Tool
          key={tool.title}
          img={tool.img}
          title={tool.title}
          span={tool.span}
        />)}
        </div>
        <button className={style.btn}>Load more</button>
      </div>
  )
}

export default Popular