import React from 'react'
export default function Delivery(props) {
  return (
    <div className='delivery'>
            <img src={props.item.img}/>
            <h5>{props.item.title}</h5>
            <h6>{props.item.note}</h6>
    </div>
  )
}
