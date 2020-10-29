import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

 const Side_Nav_Data = [
    {
        title: 'Home',
        path : '/',
        icon : <AiIcons.AiFillHome/>,
        cName : 'nav-text'
    },
    {
        title: 'Chat',
        path : '/',
        icon : <AiIcons.AiFillMessage/>,
        cName : 'nav-text'
    },
    {
        title: 'Contact',
        path : '/',
        icon : <AiIcons.AiOutlineUser/>,
        cName : 'nav-text'
    },
    {
        title: 'Notificaton',
        path : '/',
        icon : <AiIcons.AiFillNotification/>,
        cName : 'nav-text'
    },
    {
        title: 'Calender',
        path : '/',
        icon : <AiIcons.AiFillCalendar/>,
        cName : 'nav-text'
    },
    {
        title: 'Setting',
        path : '/',
        icon : <AiIcons.AiFillSetting/>,
        cName : 'nav-text'
    },
    {
        title: 'Logout',
        path : '/',
        icon : <AiIcons.AiOutlinePoweroff/>,
        cName : 'nav-text-logout'
    }

]
export default Side_Nav_Data
