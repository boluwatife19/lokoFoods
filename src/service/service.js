import React from 'react'
import Header from './head'
import data from '../service/data'
import Delivery from './delivery'


export default function Service() {
    let bryy = data.map(hot => {
        return(<Delivery  
        key = {hot.title}
        item = {hot}
        
        />)
    })
  return (
    <div className='service' id='head'>
        <Header />
        <div className='app'>
        {bryy}
        </div>
    </div>
  )
}

















