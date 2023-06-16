import React from 'react';


export default function Ios(props){
    return(
        <div className='ios' >
            <img src={props.item.img}/>
        <div className="turn">
          <div className='top'>
            <div className='up'>
                <h6>{props.item.price}</h6>
            </div>
            <div className='down'><h5>{props.item.title}</h5></div>
            </div>
        </div>
        </div>
        
    )
}