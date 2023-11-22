import React from 'react'
import ReactPlayer from 'react-player'
import VideoSistema from '../assets/SistemaDeEntrenamiento.mp4'


const Video2 = () => {
  return (
    <div>
        <ReactPlayer
        url={VideoSistema}  // Corrige la importación aquí
        width='100%'
        height='100%'
        controls={true}  // Puedes usar controls sin comillas para indicar que es un valor booleano
        playing={true}
      />
    </div>
  )
}

export default Video2