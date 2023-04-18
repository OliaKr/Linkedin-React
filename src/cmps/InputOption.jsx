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
          <div className='icon-text'>
            <Icon
              fill={color}
              color={color}
              width='24px'
            />
            <h4 className='icon-title'>{title}</h4>
          </div>
        </Tooltip>
      ) : upload ? (
        <ImgUploader
          children={
            <div className='icon-text'>
              <Icon
                fill={color}
                color={color}
                width='24px'
              />
              <h4 className='icon-title'>{title}</h4>
            </div>
          }
        />
      ) : (
        <div className='icon-text'>
          <Icon
            fill={color}
            color={color}
            width='24px'
            onClick={onClick}
          />
          <h4 className='icon-title'>{title}</h4>
        </div>
      )}
    </div>
  )
}

export default InputOption
