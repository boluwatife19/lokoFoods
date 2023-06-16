import React from 'react'

export default function Navbar() {
    
    function border (){document.querySelector('.hlink').style.borderBottom = "4px solid var(--main)"
        document.querySelector('.mlink').style.borderBottom = "none"
        document.querySelector('.wlink').style.borderBottom = "none"
        document.querySelector('.alink').style.borderBottom = "none"
    }
    function mborder (){document.querySelector('.hlink').style.borderBottom = "none"
        document.querySelector('.mlink').style.borderBottom = "4px solid var(--main)"
        document.querySelector('.wlink').style.borderBottom = "none"
        document.querySelector('.alink').style.borderBottom = "none"
    }
    function wborder (){document.querySelector('.hlink').style.borderBottom = "none"
        document.querySelector('.mlink').style.borderBottom = "none"
        document.querySelector('.wlink').style.borderBottom = "4px solid var(--main)"
        document.querySelector('.alink').style.borderBottom = "none"
    }
    function aborder (){document.querySelector('.hlink').style.borderBottom = "none"
        document.querySelector('.mlink').style.borderBottom = "none"
        document.querySelector('.wlink').style.borderBottom = "none"
        document.querySelector('.alink').style.borderBottom = "4px solid var(--main)"
    }
    function burg (){
    document.getElementById('uts').classList.toggle('active')
    document.getElementById('og').classList.toggle('active')
    document.getElementById('navbar').classList.toggle('active')
 document.getElementById('hamburger').classList.toggle('active')
    
        
    }
  return (
    <div className='navbar' id='navbar'>
        <div className='logo' id='og'>
            <a href='#home'><img src={process.env.PUBLIC_URL+"/images/f2.png" }alt="logo"/> </a>
        </div>
        <div className='lop'  onClick={burg}>
        <div id='hamburger'>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className='links' id='uts'><ul>
            <li><a href='#' className='hlink ' onClick={border}>Home</a></li>
            <li><a href='#menu' className='mlink' onClick={mborder}>Menu</a></li>
            <li><a href='#head' className='wlink' onClick={wborder}>How it works</a></li>
            <li><a href='#about' className='alink' onClick={aborder}>About</a></li>
            </ul>
            <a 
             className="order" href='#nd'>Contact</a></div>
             </div>
    </div>
  )
}
