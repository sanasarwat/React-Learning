import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'

const Menu =()=>{
    return <div className="Menustyle">
                    <ul>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="About">AboutUs</Link></li>
                    <li><Link to="Contact">ContactUs</Link></li>
                    </ul>

    </div>
    
    
    
}

export default Menu;