import React from 'react'
import '../assets/css/Widgets.css'
import { ReactComponent as Infoicon } from '../assets/icons/infoicon.svg'
import { ReactComponent as Openai } from '../assets/icons/openai.svg'
import { ReactComponent as Netflix } from '../assets/icons/netflix.svg'
import { ReactComponent as Flipkart } from '../assets/icons/flipkart.svg'
import { ReactComponent as Plus } from '../assets/icons/plus.svg'

function Widgets() {
  const options = [
    {
      icon: <Openai />,
      title: 'OpenAI  Company',
      subtitle: 'Company • Research',
    },
    {
      icon: <Netflix />,
      title: 'Netflix',
      subtitle: 'Company • Entertament',
    },
    {
      icon: <Flipkart />,
      title: 'Flipkart Company',
      subtitle: 'Company • Computer Software',
    },
  ]
  return (
    <div className='widgets'>
      <div className='widgets-header '>
        <h2>Add to your feed</h2>
        <Infoicon fill='gray' />
      </div>

      <div className='right-section'>
        {options.map((option) => (
          <div
            className='option'
            key={option.title}
          >
            <div className='option-top'>
              {option.icon}
              <div className='titles'>
                <h6 className='title'>{option.title}</h6>
                <h5 className='subtitle'>{option.subtitle}</h5>
                <button className='follow-btn'>
                  <Plus width='16px' />
                  <h4>Follow</h4>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Widgets
