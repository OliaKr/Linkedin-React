import React from 'react'
import '../assets/css/InputOption.css'
import { Tooltip } from '@mui/material'

function InputOption({ Icon, title, color, tooltipTxt, count, onClick }) {
  return (
    <div
      className='inputOption'
      onClick={onClick}
    >
      <Tooltip
        title={count ? `${count} ${tooltipTxt}` : `0 ${tooltipTxt}`}
        onClick={console.log('modal')}
      >
        <Icon style={{ color: color }} />
      </Tooltip>
      <h4 className='icon-title'>{title}</h4>
    </div>
  )
}

export default InputOption
