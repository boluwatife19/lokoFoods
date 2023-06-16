import React from 'react'

export default function Maje() {
  return (
    <div className='maje'>
        <div className='mae'>
        <img src= {process.env.PUBLIC_URL+"/images/sea.JPG"}/>
        </div>
        <div className='tetx'>
            <h3>Get 40% OFF all first 3 meal and 10% on each refferal</h3>
            <button className='fin'>Order Now</button>
        </div>
        
    </div>
  )
}
