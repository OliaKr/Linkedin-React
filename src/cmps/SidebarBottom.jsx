import React from 'react'
import { ReactComponent as Recenticon } from '../assets/icons/recenticon.svg'
import '../assets/css/SidebarBottom.css'

function SidebarBottom({ title }) {
  const options = ['Seniors for Seniors', 'Web Development', 'Sharp Coding']
  return (
    <div className='recent-groups'>
      <h4>{title}</h4>
      {options.map((option) => (
        <div
          className='option-line'
          key={option}
        >
          <Recenticon fill='gray' />
          <span>{option}</span>
        </div>
      ))}
    </div>
  )
}

export default SidebarBottom
