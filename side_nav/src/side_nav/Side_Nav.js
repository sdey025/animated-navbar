import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import Side_Nav_Data from './Side_Nav_Data'
import './Side_Nav.css'

function Side_Nav() {
    const [sidebar, setsidebar] = useState(false)
    const showSidebar = () => setsidebar(!sidebar)
    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {Side_Nav_Data.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        ) 
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Side_Nav
