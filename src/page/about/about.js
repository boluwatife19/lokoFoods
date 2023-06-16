import React from 'react'
import Swipe from './swipe'

export default function About() {
  return (
    <div className='about' id='about'>
        <img src={process.env.PUBLIC_URL+"/images/GRID.png"} />
        <Swipe />
    </div>
  )
}
