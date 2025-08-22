import React from 'react'
import './nav.css'
import { Link } from 'react-scroll'


const nav = () => {
  const items = ["header","education","experience","skills","projects","contacts"] 
  return (

    <nav class="nav">
        {items.map((item,index) => (
          <Link 
            to={item}
            key={index}
            className="nav-link"
            >{item} </Link>
        ))}
                    
                    
    </nav>
  )
}

export default Projects