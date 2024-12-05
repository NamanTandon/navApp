import React, { useState } from 'react'
import './Sidebar.css'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true)
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }
  return ( 
    <div className='sidebar'>
            <div className='sidebar-header'>

                <button className='toggle-btn' onClick = {toggleSidebar}>
                    <div className= {`arrow ${isOpen ? 'left' : 'right'}`}>

                    </div>


                </button>
            </div>


    </div>
  )
}

export default Sidebar