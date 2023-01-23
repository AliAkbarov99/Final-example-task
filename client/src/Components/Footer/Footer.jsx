import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div id='footer'>
      <div className="container">
        <div className='footer__line'></div>
        <div className='footer__text'>
          Copyright ©2023 All rights reserved | This template is made with <strong>❤</strong> by <span>Colorlib</span>
        </div>
      </div>
    </div>
  )
}

export default Footer