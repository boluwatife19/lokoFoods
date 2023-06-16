import React from 'react'

export default function End() {
    const yearr = new Date().getFullYear()
   
  return (
    <div className='end'>
        <div className=' comcl'></div>
        <div className=' boutcl'></div>
        <div className='up'>
            <ul>
                <li className='hump'><a  href=''><img src={process.env.PUBLIC_URL+'/images/f2.png'}/></a></li>
                <li><a href=''>4, Deburn Street, Sango-Otta Ogun State</a></li>
                <li className='awesome'>
                    <a href=''></a>
                    <a href=''></a>
                    <a href=''></a>
                    </li>
            </ul>
            <ul>
                <li className='hump'>Company</li>
                <li><a href='#about'>About</a></li>
                <li><a href='#head'>How it works</a></li>
                <li><a href='#menu'>Meuu</a></li>
            </ul>
            <ul>
            <li className='hump'>Get In Touch</li>
                
                <li><a href='mailto:aregpaul@gmail.com'>aregpaul@gmail.com</a></li>
                <li><a href='tel:+2347043427542'>+237043427542</a></li>
            </ul>
        </div>
        <div className='down'>
        © {yearr} loko's food ALL RIGHTS RESERVED
        </div>
    </div>
  )
}
