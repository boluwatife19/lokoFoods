import React from 'react'
import data from './data'
import Header from './header'

import Ios from './bbh'



export default function Menu() {
  
    const cardio = data.map(yup => {
      return(
        <div className='compo' id= {yup.idd}>
          <Ios 
        item = {yup}/>
        </div>
      )
    })
      
    

    function Grad(){
      return <div className="gridder">
        {cardio}
      </div>
    }
  

  return (
    <div className='menu' id='menu'>
       <Header />
       <Grad />
    </div>
  )
}
