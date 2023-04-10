import React from 'react'
import '../assets/css/InputOption.css'
import { Tooltip } from '@mui/material'
import ImgUploader from './img-uploader'

function InputOption({
  Icon,
  title,
  color,
  tooltipTxt,
  count,
  onClick,
  upload,
}) {
  let countNum = count || 0
  return (
    <div
      className='inputOption'
      onClick={onClick}
    >
      {tooltipTxt ? (
        <Tooltip title={`${countNum} ${tooltipTxt}`}>
          <Icon
            fill={color}
            color={color}
            width='24px'
          />
        </Tooltip>
      ) : upload ? (
        <ImgUploader
          children={
            <Icon
              fill={color}
              color={color}
              width='24px'
            />
          }
        />
      ) : (
        <Icon
          fill={color}
          color={color}
          width='24px'
          onClick={onClick}
        />
      )}
      <h4 className='icon-title'>{title}</h4>
    </div>
  )
}

export default InputOption
