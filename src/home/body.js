import React from 'react'

export default function Body() {
  return (
    <div className='body'>
        <div className='content'>
          <div className='text'>
            <h3>Our Menu are filled with delicious <span>delicacy</span></h3><p>Enjoy different dishes with coming from our professional chef which will make you come for a meal 2X more</p>
            <a href="#nd"> <button className='btn' id='end' type='but'>Order Now</button></a>
          </div>
          <div className='lines'>
            <img src={process.env.PUBLIC_URL+"line.png"}/>
          </div>
        </div>
        <div className='img'>
          <img src=
{process.env.PUBLIC_URL+"f1.png" }alt="Special Delicacy"/>       </div>
    </div>
  )
}
