import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import LoadingGif from '../assets/Logo Reveal All.gif'


const Landing = () => {
const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga asíncrona
    setTimeout(() => {
      setIsLoading(false);
    }, 5500); // 5000ms (3 segundos) para que carge el ingresar
  }, []);


  return (
    <div className="d-flex align-items-center justify-content-center">
      {isLoading ? ( // Muestra el loading GIF mientras isLoading es true
        <img src={LoadingGif} height='550px' alt="Loading..." />
      ) : (
        <button>
          <NavLink className="animate__animated animate__fadeIn" to={'/Home'}>
          <h2>AnimalXManizales</h2>
          </NavLink>
        </button>
      )}
    </div>
  )
}

export default Landing