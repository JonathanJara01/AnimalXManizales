import React from 'react';
import ImagenRefocus from '../assets/focusRecurso-2@2x.png'

const Logo = () => {
  return (
    <div className="elementor-widget-container">
        <div className="d-flex align-items-center justify-content-center">
            <div>
            <img src={ImagenRefocus} height='100px' />
            </div>
        </div>
    </div>
  )
}

export default Logo